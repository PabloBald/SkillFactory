const { Router } = require('express');
const router = Router();
const productsControllers = require('../controllers/productsControllers');

router.get('/',productsControllers.getAll);

module.exports = router;