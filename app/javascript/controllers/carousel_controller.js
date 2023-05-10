import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="carousel"
export default class extends Controller {
  connect() {
    super.connect();
    console.log("Connect?");

     // The swiper instance.
     this.swiper;

     // Default options for every carousels.
     this.defaultOptions;


  }
}
