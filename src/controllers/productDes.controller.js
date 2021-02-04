const productCtrl = {};
const product = require('../models/products') 

productCtrl.renderDescription = (req, res)=>{
    res.render('product/productDesc')
}

productCtrl.renderProductList = (req, res)=>{
    res.render('product/productList')
}

productCtrl.newProduct = async (req, res) =>{
    const {codigo, nombre, cantidad, precioU, img, categoria,colorDis, tallaDis} = req.body;
    const newProduct = new product({codigo, nombre, cantidad, precioU, img, categoria, colorDis,tallaDis});
    const pp = await product.findOne({codigo:newProduct.codigo});
    if(!pp){
        await newProduct.save();
        res.json('guardado')
    }else{
        res.json(pp)
    }

    
    
    
    
    
}

productCtrl.getProducts = (req, res) =>{

}

module.exports = productCtrl;