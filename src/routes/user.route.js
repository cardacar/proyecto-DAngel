const {Router} = require('express');
const router = Router();

const {
    renderLogin,
    renderRegister,
    renderPerfil
} = require('../controllers/user.controller')

router.get('/login', renderLogin);

router.get('/register', renderRegister);

router.get('/perfil', renderPerfil);

module.exports = router;