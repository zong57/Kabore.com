self.addEventListener('install', (e) => {
  console.log('Service Worker installé !');
});

self.addEventListener('fetch', (e) => {
  // Permet au site de fonctionner même avec une connexion faible
});

