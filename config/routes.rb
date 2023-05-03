Rails.application.routes.draw do
  scope "(:locale)", locale: /en|de/ do
    get "event", to: "pages#event", as: :event
    get "findus", to: "pages#findus", as: :findus
    get "contacts", to: "contacts#new"
    post "contacts", to: "contacts#create"
    get  "product", to: "pages#product", as: :product
    get '/cookies', to: 'pages#cookies_eu', as: 'cookies'
    root to: "pages#home"
  end
  match "/404", to: "errors#not_found", via: :all
  match "/500", to: "errors#internal_server_error", via: :all
end
