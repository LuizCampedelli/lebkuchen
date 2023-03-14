Rails.application.routes.draw do
  scope "(:locale)", locale: /en|de/ do
    get "event", to: "pages#event"
    get "findus", to: "pages#findus"
    get "contact", to: "contacts#contact"
    post "contact", to: "contacts#form"
    root to: "pages#home"
  end
end
