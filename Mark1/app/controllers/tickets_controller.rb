class TicketsController < ApplicationController
  before_action :set_ticket, only: %i[ show edit update destroy ]
  before_action :set_attribute_values

  # GET /tickets or /tickets.json
  def index
    #@tickets = Ticket.all
    _email = session[:current_user_id]
    @tickets = Ticket.where('reporter = ? OR assignee = ?', _email, _email)
  end

  # GET /tickets/1 or /tickets/1.json
  def show
  end

  # GET /tickets/new
  def new
    set_attribute_values
    @ticket = Ticket.new
  end

  # GET /tickets/1/edit
  def edit
  end

  # POST /tickets or /tickets.json
  def create
    @ticket = Ticket.new(ticket_params)

    respond_to do |format|
      if @ticket.save
        format.html { redirect_to ticket_url(@ticket), notice: "Ticket was successfully created." }
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
        format.html { redirect_to ticket_url(@ticket), notice: "Ticket was successfully updated." }
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

    respond_to do |format|
      format.html { redirect_to tickets_url, notice: "Ticket was successfully destroyed." }
      format.json { head :no_content }
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

    def set_attribute_values
      @product_options = [['ER', 'ER'], ['ESM', 'ESM'], ['MSP', 'MSP']]
      @ticket_type_options = [['Bug', 'Bug'], ['Defect', 'Defect'], ['Task', 'Task'], ['Epic', 'Epic'], ['Story', 'Story']]
      @status_options = [['Backlog', 'Backlog'], ['To Do', 'To Do'], ['In Progress', 'In Progress'], ['In Review', 'In Review'], ['Ready for QA', 'Ready for QA'], ['QA', 'QA'], ['UAT', 'UAT'], ['Ready for Release', 'Ready for Release'], ['Done', 'Done'], ['On Hold', 'On Hold'], ['Not Doing', 'Not Doing'], ['Duplicate', 'Duplicate'], ['Deferred', 'Deferred']]
      @environment_found_options = [['Select',''],['QA', 'QA'], ['UAT', 'UAT'], ['PreProd', 'PreProd'], ['Prod', 'Prod']]
      @priority_options = [['P3', 'P3'], ['P2', 'P2'], ['P1', 'P1']]
      @severity_options = [['Low', 'Low'], ['Medium', 'Medium'], ['High', 'High'], ['Urgent', 'Urgent']]
    end
end
