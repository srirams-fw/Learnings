class TicketsController < ApplicationController
  before_action :set_ticket, only: %i[ show edit update destroy ]
  before_action :set_attribute_values

  # GET /tickets or /tickets.json
  def index
    #@tickets = Ticket.all
    @tickets = get_user_tickets
  end

  # GET /tickets/1 or /tickets/1.json
  def show
    get_parent_info
    get_comments
  end

  # GET /tickets/new
  def new
    set_attribute_values
    @ticket = Ticket.new
  end

  # GET /tickets/1/edit
  def edit
    get_parent_info
    get_comments
  end

  # POST /tickets or /tickets.json
  def create
    @ticket = Ticket.new(ticket_params)

    respond_to do |format|
      if @ticket.save
        bust_redis_cache
        format.html { redirect_to ticket_url(@ticket), notice: I18n.t('ticket_created') }
        format.json { render :show, status: :created, location: @ticket }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ticket.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tickets/1 or /tickets/1.json
  def update
    respond_to do |format|
      if @ticket.update(ticket_params)
        bust_redis_cache
        format.html { redirect_to ticket_url(@ticket), notice: I18n.t('ticket_updated') }
        format.json { render :show, status: :ok, location: @ticket }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ticket.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tickets/1 or /tickets/1.json
  def destroy
    @ticket.destroy
    bust_redis_cache
    respond_to do |format|
      format.html { redirect_to tickets_url, notice: I18n.t('ticket_destroyed') }
      format.json { head :no_content }
    end
  end

  def get_dashboard_data
    data = get_user_tickets
    render json: { result: data }, status: :ok
  end

  def fetch_tickets
      _query = params[:query]
      _result = get_ticket_list(_query)
    render json: { query:_query,result:_result  }, status: :ok
  end

  def search_tickets
      _query = params[:query]
      _result = query_ticket_list(_query)
    render json: { query:_query,result:_result  }, status: :ok
  end

  def create_comment
    _ticket = Ticket.find(params[:ticket_id])
    _userID = User.find_by(email: session[:current_user_id])

    @comment = _ticket.comments.build(comment_params)
    @comment.user = _userID

    if @comment.save
      render json: { success: true, message: I18n.t('comment_added') }, status: :ok
    else
      render json: { success: false, message: @comment.errors }, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ticket
      @ticket = Ticket.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ticket_params
      params.require(:ticket).permit(:product, :ticket_type, :summary, :reporter, :status, :parent_ticket_id, :environment_found, :description, :priority, :severity, :start_date, :due_date, :assignee, :labels, :fix_version, :attachments, :comments)
    end

    def comment_params
      params.require(:comment).permit(:comment_text, :user_id)
    end

    def get_user_tickets
      _email = session[:current_user_id]
      return Ticket.where('reporter = ? OR assignee = ?', _email, _email)
    end
    def get_assignee_list
      return User.pluck(:email)
    end

    def get_ticket_list(_query='')
        return Ticket.where("ticket_type in (?,?,?) AND summary like '#{_query}%'",'Task', 'Epic', 'Story').order(:id).pluck(:summary, :id)
    end

    def query_ticket_list(_query='')
      _tickets = Rails.cache.fetch('query_ticket_list', expires_in: 30.minutes) do
                  Rails.logger.info "Cache miss: Fetching tickets from the database for query: #{_query}"
                  Ticket.where("summary like '#{_query}%' OR id like '#{_query}%'").order(:id).pluck(:summary, :id)
                end

                if Rails.cache.exist?('query_ticket_list')
                  Rails.logger.info "Cache hit: Retrieved tickets from Redis for query: #{_query}"
                end
      return _tickets
    end

    def set_attribute_values
      @product_options = [['ER', 'ER'], ['ESM', 'ESM'], ['MSP', 'MSP']]
      @ticket_type_options = [['Bug', 'Bug'], ['Defect', 'Defect'], ['Task', 'Task'], ['Epic', 'Epic'], ['Story', 'Story']]
      @status_options = [['Backlog', 'Backlog'], ['To Do', 'To Do'], ['In Progress', 'In Progress'], ['In Review', 'In Review'], ['Ready for QA', 'Ready for QA'], ['QA', 'QA'], ['UAT', 'UAT'], ['Ready for Release', 'Ready for Release'], ['Done', 'Done'], ['On Hold', 'On Hold'], ['Not Doing', 'Not Doing'], ['Duplicate', 'Duplicate'], ['Deferred', 'Deferred']]
      @environment_found_options = [['Select',''],['QA', 'QA'], ['UAT', 'UAT'], ['PreProd', 'PreProd'], ['Prod', 'Prod']]
      @priority_options = [['P3', 'P3'], ['P2', 'P2'], ['P1', 'P1']]
      @severity_options = [['Low', 'Low'], ['Medium', 'Medium'], ['High', 'High'], ['Urgent', 'Urgent']]
      @assignee_options = get_assignee_list
    end

    def get_parent_info
      if @ticket.parent_ticket_id && @ticket.parent_ticket_id >0
        @parent_ticket = Ticket.find(@ticket.parent_ticket_id)
      end
    end

    def get_comments
      @comments = @ticket.comments.order(created_at: :desc)
    end

    def bust_redis_cache
        Rails.cache.delete('query_ticket_list')
    end
end
