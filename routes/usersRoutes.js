const { Router } = require('express');
const router = Router();
const cartControllers = require('../controllers/usersControllers');

router.get('/',cartControllers.getAllUsers);
router.get('/firsts',cartControllers.getFirsts);
router.get('/:id',cartControllers.getUserById);


module.exports = router;