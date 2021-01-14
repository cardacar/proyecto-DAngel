//Creando el schema del producto
const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    codigo:{
        type: Number,
        require:true,
        trim: true
    },
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    cantidad:{
        type: Number,
        required:true,
        default: 0,
        trim: true
    },
    precioU:{
        type: Number,
        required: true,
        trim: true
    },
    img: {
        type: String,
        default: 'None'
    },
    colorDis: [String],
    categoria: [String],
    tallaDis: [String]

}, {
    versionKey: false,
    timestamps:true
});

module.exports = model('product', productSchema);