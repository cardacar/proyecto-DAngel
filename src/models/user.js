//Creando el esquema del usuario
const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    contraseña: {
        type:String,
        required: true
    }

},{
    versionKey: false,
    timestamps: true
});

//Encriptamos la contraseña
userSchema.method('encryptPassword', async function(password){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
});

userSchema.method('match', async function(password){
    return await bcrypt.compare(password, this.password)
});

module.exports = model('user', userSchema);