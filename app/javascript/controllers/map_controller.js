import { Controller } from "stimulus"
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

export default class extends Controller {
  static targets = [ "map" ]

  connect() {

    this.map = new mapboxgl.Map({
      container: this.mapTarget,
      style: "mapbox://styles/andregbt/cldvw7qd400bn01seodm77vbv",
      center: [50.0013, 8.8769],
      zoom: 3
    });
    var marker = new mapboxgl.Marker()
      .setLngLat([50.02, 8.88])
      .addTo(this.map);
  }
}

var div = document.getElementById('myDiv');

map.on('mousemove', function (e) {
marker.setLngLat(50.096248, 8.856807);
div.style.left = e.point.x + 'px';
div.style.top = e.point.y + 'px';
});

50.096248, 8.856807

var div = document.getElementById('1');

map.on('mousemove', function (e) {
marker.setLngLat([-50.096248, 8.856807]);
div.style.left = e.point.x + 'px';
div.style.top = e.point.y + 'px';
});
