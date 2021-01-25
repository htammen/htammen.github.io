let CACHE_NAME = "ui5-consultantprofile-pwa-v1.1.13";
// Stated in this blog https://www.captechconsulting.com/blogs/my-experience-using-service-workers from 07/16 (maybe old)
// It’s important to note here that the root is required when adding assets to the cache in the Install Event.
// If excluded, the code in the next section, Service Worker Fetch Event, will produce an error.
let RESOURCES_TO_PRELOAD = [
  "/",
  "index.html",
  "webapp/Component-preload.js",
  "register-worker.js",
  "webapp/manifest.json"
];

//	'webapp/icons/icon.svg',
// 'openui5/resources/sap-ui-messagebundle-preload.js',

//Preload UI5 core and libraries by install
const cdnBase = "https://openui5.hana.ondemand.com/resources/";
RESOURCES_TO_PRELOAD = RESOURCES_TO_PRELOAD.concat([
  `${cdnBase}sap-ui-core.js`,
  `${cdnBase}sap/ui/core/library-preload.js`,
  `${cdnBase}sap/m/themes/sap_belize/library.css`,
  `${cdnBase}sap/ui/core/themes/base/fonts/SAP-icons.woff2`,
  `${cdnBase}sap/m/library-preload.js`,
  `${cdnBase}sap/uxap/library-preload.js`,
  `${cdnBase}sap/ui/core/themes/sap_belize/library.css`,
  `${cdnBase}sap/ui/thirdparty/zyngascroll.js`,
  `${cdnBase}sap/ui/core/cldr/de.json`
]);

// Preload some resources during install
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(RESOURCES_TO_PRELOAD);
    })
  );
});

// Delete obsolete caches during activate
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// During runtime, get files from cache or -> fetch, then save to cache
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response; // There is a cached version of the resource already
      }

      let requestCopy = event.request.clone();
      return fetch(requestCopy).then(function(response) {
        if (!response) {
          return response;
        }
        // If a resource is retrieved, save a copy to the cache.
        // Unfortunately, it is not possible to check if the response form CDN
        // was successful (responses with type === 'opaque' have zero status).
        // For example, a 404 CDN error will be cached, too.
        if (response.status === 200 || response.type === "opaque") {
          let responseCopy = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseCopy);
          });
        }
        return response;
      });
    })
  );
});

/**
 * Have a look here for more details: https://www.deanhume.com/displaying-a-new-version-available-progressive-web-app/
 */
self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
