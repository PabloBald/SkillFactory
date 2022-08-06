const Products = require('../models/Products')

const getAll = async (req,res)=>{
    const allProducts = await Products.getProducts()
     res.json(allProducts); 
}

const productsControllers = {
    getAll,
}

module.exports = productsControllers;
