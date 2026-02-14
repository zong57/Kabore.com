self.addEventListener('install', (e) => {
  console.log('Service Worker installé !');
});

self.addEventListener('fetch', (e) => {
  // Permet au site de fonctionner même avec une connexion faible
});
const CACHE_NAME = 'abdoulk-diodoi-v1';
const ASSETS = [
  'index.html',
  'style.css',
  'script.js',
  'profil.jpg',
  'manifest.json'
];

// Installation : Mise en mémoire des fichiers importants
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activation : Nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Fetch : Permet au site de s'ouvrir plus vite
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

