window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

function sosVibration() {
  window.navigator.vibrate([ 
    500
  ]);
  setTimeout(500);
  window.navigator.vibrate([ 
    500
  ]);
  setTimeout(500);
  window.navigator.vibrate([ 
    500
  ]);
  setTimeout(500);
  window.navigator.vibrate([ 
    1500
  ]);
  setTimeout(500)
  window.navigator.vibrate([ 
    1500
  ]);
  setTimeout(500)
  window.navigator.vibrate([ 
    1500
  ]);
  setTimeout(500)
  window.navigator.vibrate([ 
    500
  ]);
  setTimeout(500);
  window.navigator.vibrate([ 
    500
  ]);
  setTimeout(500);
  window.navigator.vibrate([ 
    500
  ]);
  
}

function getCoordinates(){
  navigator.geolocation.getCurrentPosition(function(location) {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
    console.log(location.coords.accuracy);
  });
}

