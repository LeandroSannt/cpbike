class ChangeDatetimeInOrders < ActiveRecord::Migration[6.1]
  def change
    change_column :orders, :prazo_conclusao, :datetime
  end
end
