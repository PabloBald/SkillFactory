const fetch = (url) =>
	import("node-fetch").then(({ default: fetch }) => fetch(url));

const getProducts = async function(){
	const res = await fetch('https://fakestoreapi.com/products')
	const products = await res.json();
	
	return products;
}

const Products = {
	getProducts
}

module.exports = Products;