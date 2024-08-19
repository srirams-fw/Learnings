require 'test_helper'

class TicketsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ticket = tickets(:one)
  end

  test "should get index" do
    get tickets_url
    assert_response :success
  end

  test "should get new" do
    get new_ticket_url
    assert_response :success
  end

  test "should create ticket" do
    assert_difference('Ticket.count') do
      post tickets_url, params: { ticket: { assignee: @ticket.assignee, attachments: @ticket.attachments, comments: @ticket.comments, description: @ticket.description, due_date: @ticket.due_date, environment_found: @ticket.environment_found, fix_version: @ticket.fix_version, labels: @ticket.labels, parent_ticket_id: @ticket.parent_ticket_id, priority: @ticket.priority, product: @ticket.product, reporter: @ticket.reporter, severity: @ticket.severity, start_date: @ticket.start_date, status: @ticket.status, summary: @ticket.summary, ticket_type: @ticket.ticket_type } }
    end

    assert_redirected_to ticket_url(Ticket.last)
  end

  test "should show ticket" do
    get ticket_url(@ticket)
    assert_response :success
  end

  test "should get edit" do
    get edit_ticket_url(@ticket)
    assert_response :success
  end

  test "should update ticket" do
    patch ticket_url(@ticket), params: { ticket: { assignee: @ticket.assignee, attachments: @ticket.attachments, comments: @ticket.comments, description: @ticket.description, due_date: @ticket.due_date, environment_found: @ticket.environment_found, fix_version: @ticket.fix_version, labels: @ticket.labels, parent_ticket_id: @ticket.parent_ticket_id, priority: @ticket.priority, product: @ticket.product, reporter: @ticket.reporter, severity: @ticket.severity, start_date: @ticket.start_date, status: @ticket.status, summary: @ticket.summary, ticket_type: @ticket.ticket_type } }
    assert_redirected_to ticket_url(@ticket)
  end

  test "should destroy ticket" do
    assert_difference('Ticket.count', -1) do
      delete ticket_url(@ticket)
    end

    assert_redirected_to tickets_url
  end
end
