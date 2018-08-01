if (navigator.serviceWorker) {
	navigator.serviceWorker.register('/sw.js').then(function() {
		console.log('service worker registered');
	});
	
}