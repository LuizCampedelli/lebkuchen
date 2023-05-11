class PagesController < ApplicationController
  def home
  end

  def about
  end

  def event
  end

  def findus
    @locations = Location.all
    @markers = @locations.geocoded.map do |location|
      {
        lat: location.latitude,
        lng: location.longitude,
        info_window_html: render_to_string(partial: "popup", locals: { location: location }),
        image_url: helpers.asset_url("logo.png")
      }
    end
  end

  def contact
  end

  def product
  end

  def cookies_eu
    if I18n.locale == :en
      render 'cookies_eu_en'
    else
      render 'cookies_eu'
    end
  end  

end
