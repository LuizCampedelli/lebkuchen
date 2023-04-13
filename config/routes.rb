Rails.application.routes.draw do
  scope "(:locale)", locale: /en|de/ do
    get "event", to: "pages#event", as: :event
    get "findus", to: "pages#findus", as: :findus
    get "contacts", to: "contacts#new"
    post "contacts", to: "contacts#create"

    root to: "pages#home"
  end
end
