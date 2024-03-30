export async function saveToCache(url, file) {
    if ('serviceWorker' in navigator) {
      return navigator.serviceWorker.ready.then(function(registration) {
        return registration.active || registration.waiting || registration.installing;
      }).then(function(serviceWorker) {
        return caches.open('my-cache').then(function(cache) {
          return cache.put(url, new Response(file));
        });
      });
    } else {
      return Promise.reject(new Error('Service Worker not supported'));
    }
  }
  
export async function retrieveFromCache(url) {
    if ('serviceWorker' in navigator) {
      return caches.match(url).then(function(response) {
        if (response) {
          return response;
        }
        return null;
      });
    } else {
      return Promise.reject(new Error('Service Worker not supported'));
    }
  }
  