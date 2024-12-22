
export default {
	navigateFallback: 'index.html',
	maximumFileSizeToCacheInBytes: 4194304, // 4 * 1024 * 1024 // ( 4 mb )
	swDest: "./web/service-worker.js",
	globDirectory: "./web",
	globPatterns: [
		"images/**/**.*",
		"pages/**.*",
		"scripts/**/**.*",
		"manifest.json",
		"index.html",

	],
	globIgnores: ["scripts/appes5.*"],
	//importScripts: ['workbox-settings.js'],
	cacheId: 'TDS-web',
	cleanupOutdatedCaches: true,

	runtimeCaching: [
		{
			urlPattern: /https:\/\/unpkg.com\/@webcomponents/,
			handler: "StaleWhileRevalidate",
			options: {
				cacheName: "tds-web-runtime-cache",
				cacheableResponse: { //only for CORS
					statuses: [0, 200]
				}
			}
		},
		{
			urlPattern: /https:\/\/fonts.googleapis.com/,
			handler: "StaleWhileRevalidate",
			options: {
				cacheName: "tds-web-runtime-cache",
				cacheableResponse: { //only for CORS
					statuses: [0, 200]
				}
			}
		},
		{
			urlPattern: /https:\/\/fonts.gstatic.com/,
			handler: "StaleWhileRevalidate",
			options: {
				cacheName: "tds-web-runtime-cache",
				cacheableResponse: { //only for CORS
					statuses: [0, 200]
				}
			}
		}
	]
};
