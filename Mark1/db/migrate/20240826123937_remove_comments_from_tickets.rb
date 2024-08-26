class RemoveCommentsFromTickets < ActiveRecord::Migration[5.2]
  def change
    remove_column :tickets, :comments, :text
  end
end
