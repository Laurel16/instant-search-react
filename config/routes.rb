Rails.application.routes.draw do
  root to: 'dashboard#index'

  resources :dictionaries
  get :search, controller: :main
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


end
