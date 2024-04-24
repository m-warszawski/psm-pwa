var cacheName = 'psm-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/leaflet.css',
  '/js/main.js',
  '/js/images/marker-icon-2x.png'
  '/js/images/marker-shadow.png',
  '/images/icon.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
