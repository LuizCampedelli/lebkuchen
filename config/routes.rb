Rails.application.routes.draw do
  scope "(:locale)", locale: /en|de/ do
    get "event", to: "pages#event", as: :event
    get "findus", to: "pages#findus", as: :findus
    get "contact", to: "contacts#contact", as: :contact
    post "contact", to: "contacts#form"
    root to: "pages#home"
  end
end
