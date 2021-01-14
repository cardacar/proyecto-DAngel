const userCtrl = {};

userCtrl.renderLogin = (req, res)=>{
    res.render('user/login')
}

userCtrl.renderRegister = (req, res) =>{
    res.render('user/register')
}

userCtrl.renderPerfil = (req, res) =>{
    res.render('user/perfil')
}

module.exports = userCtrl;