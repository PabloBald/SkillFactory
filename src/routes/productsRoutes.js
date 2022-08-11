const { Router } = require('express');
const router = Router();
const productsControllers = require('../controllers/productsControllers');

router.get('/',productsControllers.getAllProducts);
router.get('/prices',productsControllers.getPrices);
router.get('/categories',productsControllers.getAllCategories);
router.get('/categories/expensive',productsControllers.getMostExpensives);
router.get('/categories/:category',productsControllers.getProductsByCategory);
router.get('/:id',productsControllers.getProductById);

module.exports = router;