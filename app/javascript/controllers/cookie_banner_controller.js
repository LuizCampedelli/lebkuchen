import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["okButton"];

  connect() {
    this.disableNavigation();
  }

  hide(event) {
    event.preventDefault();
    this.element.remove();
    document.cookie = "cookie_eu_consented=true; path=/";
    this.enableNavigation();
  }

  disableNavigation() {
    const clickableElements = Array.from(document.querySelectorAll('a, button, input[type="submit"], input[type="button"]'));
    clickableElements.forEach(element => {
      if (!element.closest('#cookies-eu-banner')) {
        element.setAttribute('data-disabled', 'true');
        element.style.pointerEvents = 'none';
        element.style.opacity = '0.5';
      }
    });
  }

  enableNavigation() {
    const disabledElements = Array.from(document.querySelectorAll('[data-disabled="true"]'));
    disabledElements.forEach(element => {
      element.removeAttribute('data-disabled');
      element.style.pointerEvents = '';
      element.style.opacity = '';
    });
  }
}



