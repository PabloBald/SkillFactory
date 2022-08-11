const fetch = (url) =>
	import("node-fetch").then(({ default: fetch }) => fetch(url));

const getCarts = async function(){
    const result = await fetch('https://fakestoreapi.com/carts');
    const carts = result.json()
    return carts;
}
const getById= async function(id){
    const result = await fetch(`https://fakestoreapi.com/carts/${id}`);
    const cart = result.json();
    return cart;
}

const Carts = {
    getCarts,
    getById
}

module.exports = Carts;