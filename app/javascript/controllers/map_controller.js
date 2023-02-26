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
  document.querySelectorAll("#icon").forEach((icon) => {
    icon.addEventListener("click", (event) => {
      const lng = icon.dataset.lng
      const lat = icon.dataset.lat

      this.map.flyTo({
        center:[lng, lat],
        essencial: true,
        zoom: 15,
        speed: 1,
       });
    })
  })
}
}
