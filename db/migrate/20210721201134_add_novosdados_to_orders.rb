class AddNovosdadosToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :prazo_entrada, :timestamp
    add_column :orders, :prazo_conclusao, :timestamp
    add_column :orders, :modelo_bike, :string
    add_column :orders, :assessoria, :string

    change_column_default(:orders, :situacao, false)
    change_column :orders, :valor, :integer
  end
end
