Rails.application.routes.draw do
  root 'imports#new'

  resources :imports, only: [:new]
end
