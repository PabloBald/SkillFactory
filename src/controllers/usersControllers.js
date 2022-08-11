const Users = require('../models/Users');

const getAllUsers= async function(req,res){
    const { limit } = req.query;

    const users = await Users.getUsers();
    if (limit) {
		products = products.filter((_product, i) => i < limit);
	}
    res.status(200).json(users);
}
const getUserById = async function(req,res){
    const user = await Users.getById(req.params.id);
    res.status(200).json(user);
}
const getFirsts = async function(_req,res){
    const users = await Users.getUsers();
    users.sort((a,b)=> a.id-b.id)
    const firsts = users.filter((_user,i) => i<3)
    res.status(200).json(firsts);
}
const usersControllers = {
    getAllUsers,
    getUserById,
    getFirsts
} 

module.exports = usersControllers;