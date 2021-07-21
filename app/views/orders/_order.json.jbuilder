json.extract! order, :id, :pedido, :valor, :descricao, :telefone_cliente, :nome_cliente, :prazo_conclusao, :situacao, :created_at, :updated_at
json.url order_url(order, format: :json)
