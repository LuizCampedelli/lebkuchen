import { Controller } from "@hotwired/stimulus";
import Swiper from 'swiper';

export default class extends Controller {
  static targets = ["button", "slide"];
  swiper = null;

  connect() {
    this.swiper = new Swiper('.mySwiper', {
      // Your Swiper options here
    });
  }

  goTo(event) {
    event.preventDefault();

    // Get the index from the clicked button's data attribute
    const index = parseInt(event.currentTarget.dataset.index);

    // Use the Swiper API to slide to the desired slide
    this.swiper.slideTo(index);
  }
}
