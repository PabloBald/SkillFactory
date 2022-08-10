const Carts = require('../models/Cart');

const getAllCarts = async (req,res)=>{
    const { limit } = req.query;

    const carts = await Carts.getCarts();
    if (limit) {
		carts = carts.filter((_product, i) => i < limit);
	}
    res.status(200).json(carts);
}
const getCartById = async (req,res)=>{
    const cart = await Carts.getById(req.id);
    res.status(200).json(cart);
}
const getBigCarts = async(_req,res)=>{
    const carts = await Carts.getBigCarts();
    res.status(200).json(carts);
}
const cartsControllers = {
    getAllCarts,
    getCartById,
    getBigCarts
}

module.exports = cartsControllers;