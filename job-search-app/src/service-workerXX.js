/* eslint-disable no-restricted-globals */

// Immediately take control on install
self.addEventListener('install', event => {
  self.skipWaiting();
});

// Claim clients as soon as activated
self.addEventListener('activate', event => {
  clients.claim();
});

// Precache and serve app shell via Workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.7.1/workbox-sw.js');
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);