json.extract! ticket, :id, :product, :ticket_type, :summary, :reporter, :status, :parent_ticket_id, :environment_found, :description, :priority, :severity, :start_date, :due_date, :assignee, :labels, :fix_version, :attachments, :comments, :created_at, :updated_at
json.url ticket_url(ticket, format: :json)
