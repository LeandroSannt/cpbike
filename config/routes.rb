Rails.application.routes.draw do
  get 'orders/order_confirmation'
  get 'orders/orders_open'

  get 'orders/teste'
  devise_for :users
  resources :users
  resources :orders

  root to: "orders#index"


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
