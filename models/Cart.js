const fetch = (url) =>
	import("node-fetch").then(({ default: fetch }) => fetch(url));

const getCarts = async function(){
    const response = await fetch('https://fakestoreapi.com/carts');
    const carts = response.json()
    return carts;
}
const getById= async function(id){
    const response = await fetch(`https://fakestoreapi.com/carts/${id}`);
    const cart = response.json();
    return cart;
}

const Carts = {
    getCarts,
    getById,
}