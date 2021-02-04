const productCtrl = {};
const product = require('../models/products') 

productCtrl.renderDescription = (req, res)=>{
    res.render('product/productDesc')
}

productCtrl.renderProductList = (req, res)=>{
    res.render('product/productList')
}

productCtrl.newProduct = async (req, res) =>{
    //obtengo el elemento enviado desde el post
    const {codigo, nombre, cantidad, precioU, img, categoria,colorDis, tallaDis} = req.body;
    //creo el producto de acuerdo al modelo creado
    const newProduct = new product({codigo, nombre, cantidad, precioU, img, categoria, colorDis,tallaDis});
    //realizo una busqueda para saber si existe alguno con el mismo codigo
    const pp = await product.findOne({codigo:newProduct.codigo});
    //verifico si existe, 
    if(!pp){
        await newProduct.save();
        res.json('guardado')
    }else{
        res.json("el elemento ya existe")
    }

    
    
    
    
    
}

productCtrl.getProducts = (req, res) =>{

}

module.exports = productCtrl;