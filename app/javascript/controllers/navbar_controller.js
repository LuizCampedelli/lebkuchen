import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["toggle", "menu", "hamburgerIcon"];

  toggleMenu() {
    this.menuTarget.classList.toggle("show");
    const isExpanded = this.toggleTarget.getAttribute("aria-expanded") === "true";
    this.toggleTarget.setAttribute("aria-expanded", !isExpanded);
  }
}
