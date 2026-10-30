// Minimaler Service Worker: macht die Startseite als App installierbar.
// Die Daten kommen weiterhin live aus Google (keine Zwischenspeicherung der Teamdaten).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* Netzwerk wie gewohnt */ });
