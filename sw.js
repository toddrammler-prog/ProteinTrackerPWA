// Replaced by OneSignalSDKWorker.js — this file clears the old cache and unregisters itself.
const CACHE = 'protein-tracker-v6';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});
