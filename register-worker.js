/**
 * Register the service worker
 */
if ('serviceWorker' in navigator) {
  // load serviceworker after page has been loaded. This ensures a best first-visit experience.
  // see here for details: https://developers.google.com/web/fundamentals/primers/service-workers/registration
  window.addEventListener('load', function() {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function () { 
            console.log('Service Worker Registered'); 
        }).catch(function(error) {
            console.log('Service Worker Registration failed');
            console.log(error);
        });
  });
}