class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :pedido
      t.float :valor
      t.text :descricao
      t.string :telefone_cliente
      t.string :nome_cliente
      t.boolean :situacao

      t.timestamps
    end
  end
end
