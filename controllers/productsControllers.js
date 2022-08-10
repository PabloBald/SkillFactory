const Products = require("../models/Products");

const getAllProducts = async (req, res) => {
	const { limit } = req.query;
	let products = await Products.getProducts();

	if (limit) {
		products = products.filter((_product, i) => i < limit);
	}
	res.status(200).json(products);
};
const getProductById = async (req, res) => {
	let product = await Products.getById(req.params.id);
	res.status(200).json(product);
};
const getAllCategories = async (_req, res) => {
	const categories = await Products.getCategories();

	res.status(200).json(await Promise.all(
		categories.map(async(category) => {
			const products = await Products.getByCategory(category);
			return { category, products };
		})
	));
};
const getProductsByCategory = async (req, res) => {
	const products = await Products.getByCategory(req.params.category);
	res.status(200).json(products);
};
const getPrices = async (req, res) => {
	const { order } = req.query;
	const products = await Products.getProducts();
	const prices = products.map((product) => {
		return {
			id: product.id,
			title: product.title,
			price: product.price,
		};
	});

	if (order) {
		if (order.toUpperCase().localeCompare("ASC"))
			prices.sort((a, b) => b.price - a.price);
		if (order.toUpperCase().localeCompare("DESC"))
			prices.sort((a, b) => a.price - b.price);
	}
	res.status(200).json(prices);
};
const getMostExpensives = async (_req, res) => {
	const categories = await Products.getCategories();
	const expensives = categories.map(async (category) => {
		const product = Products.getByCategory(category).then((data) => {
			data.sort((a, b) => b.price - a.price);
			return data[0];
		});
		return product;
	});

	res.status(200).json(await Promise.all(expensives));
};

const productsControllers = {
	getAllProducts,
	getProductById,
	getAllCategories,
	getProductsByCategory,
	getPrices,
	getMostExpensives,
};

module.exports = productsControllers;
