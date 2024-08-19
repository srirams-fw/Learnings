require "application_system_test_case"

class TicketsTest < ApplicationSystemTestCase
  setup do
    @ticket = tickets(:one)
  end

  test "visiting the index" do
    visit tickets_url
    assert_selector "h1", text: "Tickets"
  end

  test "creating a Ticket" do
    visit tickets_url
    click_on "New Ticket"

    fill_in "Assignee", with: @ticket.assignee
    fill_in "Attachments", with: @ticket.attachments
    fill_in "Comments", with: @ticket.comments
    fill_in "Description", with: @ticket.description
    fill_in "Due date", with: @ticket.due_date
    fill_in "Environment found", with: @ticket.environment_found
    fill_in "Fix version", with: @ticket.fix_version
    fill_in "Labels", with: @ticket.labels
    fill_in "Parent ticket", with: @ticket.parent_ticket_id
    fill_in "Priority", with: @ticket.priority
    fill_in "Product", with: @ticket.product
    fill_in "Reporter", with: @ticket.reporter
    fill_in "Severity", with: @ticket.severity
    fill_in "Start date", with: @ticket.start_date
    fill_in "Status", with: @ticket.status
    fill_in "Summary", with: @ticket.summary
    fill_in "Ticket Type", with: @ticket.ticket_type
    click_on "Create Ticket"

    assert_text "Ticket was successfully created"
    click_on "Back"
  end

  test "updating a Ticket" do
    visit tickets_url
    click_on "Edit", match: :first

    fill_in "Assignee", with: @ticket.assignee
    fill_in "Attachments", with: @ticket.attachments
    fill_in "Comments", with: @ticket.comments
    fill_in "Description", with: @ticket.description
    fill_in "Due date", with: @ticket.due_date
    fill_in "Environment found", with: @ticket.environment_found
    fill_in "Fix version", with: @ticket.fix_version
    fill_in "Labels", with: @ticket.labels
    fill_in "Parent ticket", with: @ticket.parent_ticket_id
    fill_in "Priority", with: @ticket.priority
    fill_in "Product", with: @ticket.product
    fill_in "Reporter", with: @ticket.reporter
    fill_in "Severity", with: @ticket.severity
    fill_in "Start date", with: @ticket.start_date
    fill_in "Status", with: @ticket.status
    fill_in "Summary", with: @ticket.summary
    fill_in "TicketType", with: @ticket.ticket_type
    click_on "Update Ticket"

    assert_text "Ticket was successfully updated"
    click_on "Back"
  end

  test "destroying a Ticket" do
    visit tickets_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ticket was successfully destroyed"
  end
end
