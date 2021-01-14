const {Router} = require('express');
const router = Router();

const {renderDescription} = require('../controllers/productDes.controller');

router.get('/product', renderDescription);

module.exports = router;