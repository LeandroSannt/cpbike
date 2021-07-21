class ChangeAssessoriaInOrders < ActiveRecord::Migration[6.1]
  def change
    rename_column :orders, :Assessoria, :assessoria

  end
end
