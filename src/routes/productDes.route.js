const {Router} = require('express');
const router = Router();

const {renderDescription, newProduct} = require('../controllers/productDes.controller');

router.get('/product', renderDescription);

router.post('/product/newProduct', newProduct);

module.exports = router;