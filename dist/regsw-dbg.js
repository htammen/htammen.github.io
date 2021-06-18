// service worker registration
//
initSW = function(folder) {
  folder = folder || '.';
  if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register(folder + '/sw.js').then(function() {
      console.log('service worker successfully registered');
    });
  });
  }
}
