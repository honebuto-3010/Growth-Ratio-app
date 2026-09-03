const CACHE_NAME = "growth-ratio-cache-v1";
const urlsToCache = [
  "index.html",
  "menu.html",
  "proportion.html",
  "tax.html",
  "growth.html",
  "profit.html",
  "discount.html",
  "css/style.css",
  "css/menu.css",
  "css/calc.css",
  "js/home.js",
  "js/calc-proportion.js",
  "js/calc-tax.js",
  "js/calc-growth.js",
  "js/calc-profit.js",
  "js/calc-discount.js",
  "manifest.json"
];

// インストール（初回アクセス時）
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// オフライン対応（キャッシュ優先）
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// 古いキャッシュの削除
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
