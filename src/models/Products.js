const fetch = (url) =>
	import("node-fetch").then(({ default: fetch }) => fetch(url));

const getProducts = async function () {
	const result = await fetch("https://fakestoreapi.com/products");
	const products = await result.json();
	return products;
};
const getById = async function (id) {
	const result = await fetch(`https://fakestoreapi.com/products/${id}`);
	const product = await result.json();
	return product;
};
const getCategories = async function () {
	const result = await fetch("https://fakestoreapi.com/products/categories");
	const categories = await result.json();
	return categories;
};
const getByCategory = async function (category) {
	const result = await fetch(
		`https://fakestoreapi.com/products/category/${category}`
	);
	const categoryProducts = await result.json();
	return categoryProducts;
};


const Products = {
	getProducts,
	getById,
	getCategories,
	getByCategory,
};


module.exports = Products;