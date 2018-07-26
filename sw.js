self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('restaurant-v1').then(function(cache) {
			return cache.addAll([
				'/',
				'index.html',
				'restaurant.html',
				'css/responsive.css',
				'css/styles.css',
				'js/dbhelper.js',
				'js/main.js',
				'js/restaurant_info.js',
				'data/restaurants.json',
				'js/sw/index.js'
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
  	event.respondWith(
  		caches.match(event.request).then(function(response) {
  			if(response) return response;
  			return fetch(event.request);
  		})
  	);
});