const fetch = (url) =>
	import("node-fetch").then(({ default: fetch }) => fetch(url));

const getProducts = async function () {
	const res = await fetch("https://fakestoreapi.com/products");
	const products = await res.json();
	return products;
};
const getById = async function (id) {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	const product = await res.json();
	return product;
};
const getCategories = async function () {
	const res = await fetch("https://fakestoreapi.com/products/categories");
	const categories = await res.json();
	return categories;
};
const getByCategory = async function (category) {
	const res = await fetch(
		`https://fakestoreapi.com/products/category/${category}`
	);
	const categoryProducts = await res.json();
	return categoryProducts;
};
const getProductsPrices = async function () {
	const products = await Products.getProducts();
	const prices = products.map((product) => {
		return {
			id: product.id,
			title: product.title,
			price: product.price,
		};
	});
	return prices;
};
const getExpensivestProducts = async function () {
	const categories = await getCategories();
	const expensives = categories.map(async (category) => {
		const product = getByCategory(category).then((data) => {
			data.sort((a, b) => b.price - a.price);
			return data[0];
		});
		return product;
	});

	return Promise.all(expensives)
};

const Products = {
	getProducts,
	getById,
	getCategories,
	getByCategory,
	getProductsPrices,
	getExpensivestProducts,
};

module.exports = Products;