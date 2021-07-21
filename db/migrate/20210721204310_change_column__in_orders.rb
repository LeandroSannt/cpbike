class ChangeColumnInOrders < ActiveRecord::Migration[6.1]
  def change

    change_column_default(:orders, :situacao, false)
    change_column :orders, :prazo_conclusao, :timestamp
    change_column :orders, :valor, :integer
    

  end
end
