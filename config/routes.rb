Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

 get "event", to: "pages#event"
 get "findus", to: "pages#findus"
 get "contact", to: "contacts#contact"
 post "contact", to: "contacts#form"
end
