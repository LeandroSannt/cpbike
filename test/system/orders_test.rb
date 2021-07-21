require "application_system_test_case"

class OrdersTest < ApplicationSystemTestCase
  setup do
    @order = orders(:one)
  end

  test "visiting the index" do
    visit orders_url
    assert_selector "h1", text: "Orders"
  end

  test "creating a Order" do
    visit orders_url
    click_on "New Order"

    fill_in "Descricao", with: @order.descricao
    fill_in "Nome cliente", with: @order.nome_cliente
    fill_in "Pedido", with: @order.pedido
    fill_in "Prazo conclusao", with: @order.prazo_conclusao
    check "Situacao" if @order.situacao
    fill_in "Telefone cliente", with: @order.telefone_cliente
    fill_in "Valor", with: @order.valor
    click_on "Create Order"

    assert_text "Order was successfully created"
    click_on "Back"
  end

  test "updating a Order" do
    visit orders_url
    click_on "Edit", match: :first

    fill_in "Descricao", with: @order.descricao
    fill_in "Nome cliente", with: @order.nome_cliente
    fill_in "Pedido", with: @order.pedido
    fill_in "Prazo conclusao", with: @order.prazo_conclusao
    check "Situacao" if @order.situacao
    fill_in "Telefone cliente", with: @order.telefone_cliente
    fill_in "Valor", with: @order.valor
    click_on "Update Order"

    assert_text "Order was successfully updated"
    click_on "Back"
  end

  test "destroying a Order" do
    visit orders_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Order was successfully destroyed"
  end
end
