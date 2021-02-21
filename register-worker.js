let newWorker

/**
 * Register the service worker
 */
if ('serviceWorker' in navigator) {
  // load serviceworker after page has been loaded. This ensures a best first-visit experience.
  // see here for details: https://developers.google.com/web/fundamentals/primers/service-workers/registration
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then((reg) => {
        console.log('Service Worker Registered')
        reg.addEventListener('updatefound', () => {
          // An updated service worker has appeared in reg.installing!
          newWorker = reg.installing
          newWorker.addEventListener('statechange', () => {
            // Has service worker state changed?
            switch (newWorker.state) {
              case 'installed':
                // There is a new service worker available, show the notification
                if (navigator.serviceWorker.controller) {
                  const ui5RootControl = sap.ui
                    .getCore()
                    .getUIArea('content')
                    .getContent()[0]
                    .getApp()
                    .getComponentInstance()
                    .getRootControl()
                  if (ui5RootControl.getController().onNewVersion) {
                    ui5RootControl.getController().onNewVersion()
                  }
                }
                break
            }
          })
        })
      })
      .catch(function (error) {
        console.log('Service Worker Registration failed')
        console.log(error)
      })

    let refreshing
    // The event listener that is fired when the service worker updates
    // Here we reload the page
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (refreshing) return
      window.location.reload()
      refreshing = true
    })
  })
}
