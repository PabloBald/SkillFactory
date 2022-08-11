const Carts = require('../models/Cart');
const Users = require('../models/Users');

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
    const carts = await Carts.getCarts();
    let bigCarts = carts.filter(cart=> cart.products.length > 2)
    bigCarts = bigCarts.map(async cart => {
        const user = await (await Users.getById(cart.userId));
        return {
            ...cart,
            cartOwner: user.name
        }
    })
    res.status(200).json(await Promise.all(bigCarts));
}
const cartsControllers = {
    getAllCarts,
    getCartById,
    getBigCarts
}

module.exports = cartsControllers;