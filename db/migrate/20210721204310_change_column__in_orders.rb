class ChangeColumnInOrders < ActiveRecord::Migration[6.1]
  def change

    change_column_default(:orders, :situacao, false)
    change_column :orders, :prazo_conclusao, :datetime
    change_column :orders, :valor, :integer
    

  end
end
