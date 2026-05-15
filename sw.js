/* ============================================
   ELITE EMPORIUM — SERVICE WORKER (PWA)
   Cache-first for static assets, network-first
   for pages and API calls.
   ============================================ */

const CACHE_NAME = 'elite-emporium-v14';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/products.html',
  '/product.html',
  '/cart.html',
  '/wishlist.html',
  '/orders.html',
  '/order-success.html',
  '/about.html',
  '/privacy.html',
  '/terms.html',
  '/track-order.html',
  '/profile.html',
  '/collection.html',
  '/hanii-dhanii.html',
  '/404.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  // Note: /images/logo.png (2.4 MB original) is no longer pre-cached.
  // All HTML pages + script.js reference the sized variants below.
  // The original PNG is kept on disk for the TWA Android build (Bubblewrap
  // downloads it at build time + bakes resized icons into the APK).
  '/images/logo-48.png',
  '/images/logo-96.png',
  '/images/logo-192.png',
  '/images/logo-512.png',
  '/favicon.ico',
];

// ── INSTALL: pre-cache static shell ──────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS).catch(() => {});
    })
  );
  self.skipWaiting();
});

// ── ACTIVATE: remove old caches ──────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ── MESSAGE: allow the page to trigger an immediate activate ─
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// ── FETCH: cache-first for static, network-first for nav ──
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin (Firebase, WhatsApp, etc.)
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  // Firebase Firestore — always network, never cache
  if (url.hostname.includes('firestore') || url.hostname.includes('firebase')) return;

  // Versioned asset URLs (e.g. script.js?v=...) — always go to network so
  // a deploy is picked up immediately. Cache the response under the
  // bare URL too so offline fallback still works for the previous version.
  // (Anchor v= to a real query-param boundary so params like ?nv=, ?dev=
  //  don't accidentally trip this branch.)
  if (/[?&]v=/.test(url.search)) {
    event.respondWith(
      fetch(request).then(resp => {
        if (resp && resp.ok) {
          const bareUrl = url.pathname; // strip query
          const cacheReq = new Request(bareUrl, request);
          caches.open(CACHE_NAME).then(c => c.put(cacheReq, resp.clone())).catch(() => {});
        }
        return resp;
      }).catch(() => caches.match(url.pathname))
    );
    return;
  }

  // HTML pages — stale-while-revalidate for instant return-visit loads.
  // Strategy: respond from cache immediately if we have it (visible
  // paint in <50ms), then update the cache in the background so the
  // NEXT visit gets the fresh copy. On first visit: network. On
  // network failure: cache → 404 → index fallback chain.
  if (request.destination === 'document') {
    event.respondWith(
      caches.match(request).then(cached => {
        const networkFetch = fetch(request).then(resp => {
          if (resp && resp.ok) {
            const clone = resp.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone)).catch(() => {});
          }
          return resp;
        }).catch(() =>
          cached || caches.match('/404.html').then(p => p || caches.match('/index.html'))
        );
        // Return cache immediately if present (stale), else wait for network (fresh).
        return cached || networkFetch;
      })
    );
    return;
  }

  // Images — cache-first, stale-while-revalidate
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request).then(cached => {
        const networkFetch = fetch(request).then(resp => {
          caches.open(CACHE_NAME).then(cache => cache.put(request, resp.clone()));
          return resp;
        }).catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }

  // CSS / JS — stale-while-revalidate so updates land on next visit
  // (avoids stuck-old-script.js bugs after deploys)
  if (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
    event.respondWith(
      caches.match(request).then(cached => {
        const networkFetch = fetch(request).then(resp => {
          if (resp && resp.ok) {
            caches.open(CACHE_NAME).then(cache => cache.put(request, resp.clone()));
          }
          return resp;
        }).catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }

  // Fonts / other static — cache-first
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(resp => {
        caches.open(CACHE_NAME).then(cache => cache.put(request, resp.clone()));
        return resp;
      }).catch(() => cached);
    })
  );
});
