import { Controller } from "@hotwired/stimulus"


// Connects to data-controller="map"
export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array,

  }
  static targets = ["card"]


  connect() {
    mapboxgl.accessToken = this.apiKeyValue

    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/mapbox/streets-v10",
    });
    this.#addMarkersToMap()
    this.#fitMapToMarkers()
    this.#showLocationToMap()




    }



 #addMarkersToMap() {
    this.markersValue.forEach((marker) => {
    const customMarker = document.createElement("div")
    customMarker.style.height = "30px"
    customMarker.style.width = "30px"
    customMarker.style.backgroundImage = `url('${marker.image_url}')`
    customMarker.style.backgroundSize = "contain"
    const popup = new mapboxgl.Popup().setHTML(marker.info_window_html)
    new mapboxgl.Marker({element: customMarker} )
      .setLngLat([ marker.lng, marker.lat])
      .setPopup(popup)
      .addTo(this.map)

  })
}


  #fitMapToMarkers(){
    const bounds = new mapboxgl.LngLatBounds( )
    this.markersValue.forEach((marker) => {
      bounds.extend([marker.lng, marker.lat])
  })
  this.map.fitBounds(bounds, {
    padding: 100, duration: 10
  })



}


 #showLocationToMap() {
  this.cardTarget.forEach((card) => {
    card.addEventListener("click", () => {
      const latitude = card.dataset.latitude
      const longitude = card.dataset.longitude
      const center = [longitude, latitude]
      this.map.flyTo({ center: center, zoom: 9, speed: 0.2, curve: 1 })
    })
  })
}
}
