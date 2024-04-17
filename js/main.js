window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
  }
}

// SOS
function sosVibration() {

  setTimeout(window.navigator.vibrate(2000), 1500);
  setTimeout(window.navigator.vibrate(2000), 1500);
  setTimeout(window.navigator.vibrate(2000), 1500);

  setTimeout(window.navigator.vibrate(6000), 1500);
  setTimeout(window.navigator.vibrate(6000), 1500);
  setTimeout(window.navigator.vibrate(6000), 1500);

  setTimeout(window.navigator.vibrate(2000), 1500);
  setTimeout(window.navigator.vibrate(2000), 1500);
  setTimeout(window.navigator.vibrate(2000), 1500);

}


// MAP
var mapOptions = {
  center: [50.06914, 19.95470],
  zoom: 15
}

var map = new L.map('area', mapOptions);

var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(layer);
console.log(location)

var markerOptions = {
  title: "MyLocation",
  clickable: true,
  draggable: true,
}
var marker = L.marker([17.438139, 78.395830], markerOptions);
         
         // Adding popup to the marker
marker.bindPopup('Hi welcome to Tutorialspoint').openPopup();
         
         // Adding marker to the map
marker.addTo(map);