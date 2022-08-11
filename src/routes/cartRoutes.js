const { Router } = require('express');
const router = Router();
const cartControllers = require('../controllers/cartsControllers');

router.get('/',cartControllers.getAllCarts);
router.get('/bigcarts',cartControllers.getBigCarts);
router.get('/:id',cartControllers.getCartById);

module.exports = router;