window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

function sosVibration() {
  window.navigator.vibrate([ 
    200
  ]);
  setTimeout(150);
  window.navigator.vibrate([ 
    200
  ]);
  setTimeout(150);
  window.navigator.vibrate([ 
    200
  ]);
  setTimeout(150);
  window.navigator.vibrate([ 
    600
  ]);
  setTimeout(300)
  window.navigator.vibrate([ 
    600
  ]);
  setTimeout(300)
  window.navigator.vibrate([ 
    600
  ]);
  setTimeout(300)
  window.navigator.vibrate([ 
    200
  ]);
  setTimeout(150);
  window.navigator.vibrate([ 
    200
  ]);
  setTimeout(150);
  window.navigator.vibrate([ 
    200
  ]);
  
}

function getCoordinates(){
  navigator.geolocation.getCurrentPosition(function(location) {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
    console.log(location.coords.accuracy);
  });
}

