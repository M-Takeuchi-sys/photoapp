require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq' if Rails.env.development?
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?

  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'photos#index'

  resources :photos do
    resource :like, only: [:create, :destroy]
    resources :comments, only: [:index, :new, :create]
  end

  resources :accounts, only: [:show] do
    resources :followings, only: [:index]
    resources :follows, only: [:index, :show, :create]
    resources :unfollows, only: [:create]
  end

  resource :profile, only: [:show, :update]
end
