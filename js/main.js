window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
  }
}

// SOS
 function sosVibration() {
window.navigator.vibrate([600,600,600,600,600,600,1500,600,1500,600,1500,600,600,600,600,600,600]);
}

//map
function  renderMap(){
  var mapOptions = {
    center: [50.049683, 19.944544],
    zoom: 10
  }
  
  // Creating a map object
  var map = new L.map('map', mapOptions);
  
  // Creating a Layer object
  var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  
  // Adding layer to the map
  map.addLayer(layer);

  // Function to update map location
  function onLocationFound(e) {
    var radius = e.accuracy / 2;

    var locationMarker = L.marker(e.latlng).addTo(map)
        .bindPopup("You are somewhere within this circle").openPopup();

    var locationCircle = L.circle(e.latlng, radius).addTo(map);
    map.setView(e.latlng, 13); // Zoom closer
    }

  function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationerror', onLocationError);
  map.on('locationfound', onLocationFound);

  // Request user's location
  map.locate({setView: true, maxZoom: 16});
}


