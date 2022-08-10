const fetch = (url) =>
	import("node-fetch").then(({ default: fetch }) => fetch(url));