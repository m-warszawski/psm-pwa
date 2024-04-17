window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

function sosVibration() {
  
  setTimeout(window.navigator.vibrate(2000),1500);
  setTimeout(window.navigator.vibrate(2000),1500);
  setTimeout(window.navigator.vibrate(2000),1500);

  setTimeout(window.navigator.vibrate(6000),1500);
  setTimeout(window.navigator.vibrate(6000),1500);
  setTimeout(window.navigator.vibrate(6000),1500);

  setTimeout(window.navigator.vibrate(2000),1500);
  setTimeout(window.navigator.vibrate(2000),1500);
  setTimeout(window.navigator.vibrate(2000),1500);
  
}

function getCoordinates(){
  navigator.geolocation.getCurrentPosition(function(location) {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
    console.log(location.coords.accuracy);
  });
}

