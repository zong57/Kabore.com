const CACHE_NAME = 'abdoulk-diodoi-v1';

// Liste des fichiers à mettre en cache (tous à la racine)
const ASSETS = [
  './',
  'index.html',
  'style.css',
  'script.js',
  'profil.jpg',
  'manifest.json'
];

// INSTALLATION : On télécharge les fichiers dans la mémoire du téléphone
self.addEventListener('install', (event) => {
  console.log('Service Worker : Installation en cours...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker : Mise en cache des fichiers');
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// ACTIVATION : On prend le contrôle immédiatement
self.addEventListener('activate', (event) => {
  console.log('Service Worker : Activé et prêt !');
  event.waitUntil(self.clients.claim());
});

// RÉCUPÉRATION (FETCH) : On affiche les fichiers du cache si on est hors-ligne
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retourne le fichier du cache, sinon va le chercher sur internet
        return response || fetch(event.request);
      })
  );
});

