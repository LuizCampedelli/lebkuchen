Rails.application.routes.draw do
  scope "(:locale)", locale: /en|de/ do
    root to: "pages#home"
    get "event", to: "pages#event", as: :event
    get "findus", to: "pages#findus", as: :findus
    get "contacts", to: "contacts#new"
    post "contacts", to: "contacts#create"
    get  "/product", to: "pages#product", as: :product
    get "/legal", to: "pages#legal", as: :legal
    get '/cookies_eu', to: 'pages#cookies_eu', as: 'cookies'
    get '/cookies_eu_en', to: 'pages#cookies_eu_en', as: 'cookies_en'
    match "/404", to: "errors#not_found", via: :all
    match "/500", to: "errors#internal_server_error", via: :all
  end
end
