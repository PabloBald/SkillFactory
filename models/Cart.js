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
const getBigCarts = async function(){
    const carts = await Carts.getCarts();
    const bigCarts = carts.filter(cart=> cart.products.length > 2)
    const bigCartsMapped = bigCarts.map(async cart => {
        const user = await (await fetch(`https://fakestoreapi.com/users/${cart.userId}`)).json();
        return {
            ...cart,
            orderOwner: user.name
        }
    })
    return await Promise.all(bigCartsMapped);
}
const Carts = {
    getCarts,
    getById,
    getBigCarts
}

module.exports = Carts;