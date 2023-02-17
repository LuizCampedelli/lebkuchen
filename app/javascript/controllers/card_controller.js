import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card"]
  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  disable(){
    this.cardTarget.forEach((card) => {
      card.addEventListener("click", () => {
          const latitude = card.dataset.latitude
           const longitude = card.dataset.longitude
           const center = [longitude, latitude]
           this.map.flyTo({ center, zoom: 9, speed: 0.2, curve: 1 })
         })
        })
  }
}
