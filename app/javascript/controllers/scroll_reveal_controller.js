import { Controller } from 'stimulus';
import ScrollReveal from 'stimulus-scroll-reveal';
export default class extends Controller {
  connect() {
    this.scrollReveal = new ScrollReveal(this.element, {
      reset: true, // Enables re-triggering of the animations
      // Add any other ScrollReveal options here
    });
    this.scrollReveal.observe();
  }
  disconnect() {
    this.scrollReveal.unobserve();
  }
}
