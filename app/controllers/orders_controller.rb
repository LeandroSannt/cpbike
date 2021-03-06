class OrdersController < ApplicationController
  before_action :set_order, only: [ :show, :edit, :update, :destroy, :order_confirmation ]

  # GET /orders or /orders.json
  def index
    @orders = Order.all
  end

  def order_confirmation
    @check = @order.update_columns(situacao: false)
    redirect_back(fallback_location: :back, notice: "Ordem concluida com sucesso!")
  end

  def orders_open

    @orders_open = Order.where(situacao:true).order(created_at: :desc)

  end

  # GET /orders/1 or /orders/1.json
  def show
  end

  # GET /orders/new
  def new
    @order = Order.new
  end

  # GET /orders/1/edit
  def edit
  end

  

  # POST /orders or /orders.json
  def create
    @order = Order.new(order_params)

    @order.situacao = "ANDAMENTO"

    respond_to do |format|
      if @order.save
        format.html { redirect_to @order, notice: "Order was successfully created." }
        format.json { render :show, status: :created, location: @order }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /orders/1 or /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to @order, notice: "Order was successfully updated." }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /orders/1 or /orders/1.json
  def destroy
    @order.destroy
    respond_to do |format|
      format.html { redirect_to orders_url, notice: "Order was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      params.require(:order).permit(:pedido, :valor, :descricao, :telefone_cliente, :nome_cliente, :prazo_conclusao, :situacao)
    end
end
