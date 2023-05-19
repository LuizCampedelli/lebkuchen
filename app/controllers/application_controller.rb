class ApplicationController < ActionController::Base
  # before_action :set_locale
  around_action :switch_locale

  # def set_locale
  #   I18n.locale = params[:locale] || session[:locale] || I18n.default_locale
  #   session[:locale] = I18n.locale
  # end

  def switch_locale(&action)
    locale = params[:locale] || I18n.default_locale
    I18n.with_locale(locale, &action)
  end

  def default_url_options
    { locale: I18n.locale }
  end
end
