Rails.application.routes.draw do
  root 'imports#new'

  resources :imports, only: [:index, :new, :create]
end
