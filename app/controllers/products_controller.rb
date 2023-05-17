class ProductsController < ApplicationController
  def swiper
    @images = [
      {file: "chocoflavor.svg", alt: "chocolate"},
      {file: "plainflavor.svg", alt: "plainflavor"},
      {file: "sugarflavor.svg", alt: "sugarflavor"}
    ]
  end
end
