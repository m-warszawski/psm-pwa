window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

function sosVibration() {
  window.navigator.vibrate([ 
    30,30,30,100,100,100,30,30,30
  ]);
}
