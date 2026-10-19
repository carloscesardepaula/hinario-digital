// Atualize CACHE_VERSION ao publicar uma nova versão para renovar os arquivos offline.
const CACHE_VERSION = 'hinario-digital-v20261019-02';
const FILES = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('hinario-digital-') && key !== CACHE_VERSION).map(key => caches.delete(key)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  if(event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then(response => {
      if(response.ok) { const copy=response.clone(); caches.open(CACHE_VERSION).then(cache=>cache.put('./index.html',copy)); }
      return response;
    }).catch(async () => (await caches.match(event.request)) || (await caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
