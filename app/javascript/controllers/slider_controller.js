import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "slide"];

  goTo(event) {
    event.preventDefault();

    // Get the index from the clicked button's data attribute
    const index = event.currentTarget.dataset.index;

    // Find the corresponding slide
    const slide = this.slideTargets[index];

    // Scroll to the slide
    slide.scrollIntoView({ behavior: "smooth" });
  }
}
