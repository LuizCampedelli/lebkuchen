import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["link"];

  connect() {
    console.log("Connected to scroll-reveal controller");
    console.log("Link target:", this.linkTarget);
    this.checkScrollPosition();
    window.addEventListener("scroll", () => this.checkScrollPosition());
  }

  checkScrollPosition() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    console.log("Scroll position:", scrollTop);
    console.log("Scroll height:", scrollHeight);

    if (scrollTop >= scrollHeight) {
      this.linkTarget.classList.remove("d-none");
    } else {
      this.linkTarget.classList.add("d-none");
    }
  }
}
