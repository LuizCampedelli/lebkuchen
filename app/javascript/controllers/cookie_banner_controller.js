import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["okButton"];

  hide(event) {
    event.preventDefault();
    this.element.remove();
    document.cookie = "cookie_eu_consented=true; path=/";
  }
}


