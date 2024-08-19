class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.string :product
      t.string :type, null: false
      t.text :summary, null: false
      t.string :reporter, null: false
      t.string :status, null: false
      t.integer :parent_ticket_id
      t.string :environment_found
      t.text :description
      t.string :priority, null: false
      t.string :severity, null: false
      t.date :start_date
      t.date :due_date
      t.string :assignee, null: false
      t.string :labels
      t.string :fix_version
      t.string :attachments
      t.text :comments

      t.timestamps
    end
  end
end
