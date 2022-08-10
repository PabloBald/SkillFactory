const Carts = require('../models/Cart');

const getAllCarts = async (req,res)=>{
    carts = await Carts.getCarts();
    res.json(carts);
}

const cartsControllers = {
    getAllCarts,
}

module.exports = cartsControllers;