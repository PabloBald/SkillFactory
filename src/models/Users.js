const fetch = (url) =>
	import("node-fetch").then(({ default: fetch }) => fetch(url));

	const getUsers = async function(){
		const result = await fetch('https://fakestoreapi.com/users');
		const users = result.json()
		return users;
	}
	const getById= async function(id){
		const result = await fetch(`https://fakestoreapi.com/users/${id}`);
		const user = result.json();
		return user;
	}

const Users = {
	getUsers,
	getById
}
module.exports = Users;