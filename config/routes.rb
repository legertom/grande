Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :edit, :show, :update, :new, :index]
    resource :session, only: [:create, :destroy]
    resources :saves
    resources :favorites, only: [:create, :destroy, :index, :show]
  end

  root to: 'static_pages#root'
end
