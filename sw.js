const CACHE_NAME = "webar-cache-v2";
const urlsToCache = [
  './',
  './index.html',
  './imagen.jpg',
  'https://aframe.io/releases/1.4.0/aframe.min.js',
  'https://cdn.jsdelivr.net/gh/AR-js-org/AR.js/aframe/build/aframe-ar.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
