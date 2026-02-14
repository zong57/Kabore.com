/* ============================================================
   SERVICE WORKER - ABDOULK DIODOI (OFFICIEL)
   ============================================================ */

const CACHE_NAME = 'abdoulk-app-v1';
// Liste des fichiers à garder en mémoire (cache)
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './profil.jpg' // Ton icône
];

// Installation : Mise en cache des fichiers
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activation : Nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// Stratégie réseau : Charge le cache, sinon le réseau
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
