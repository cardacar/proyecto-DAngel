//Conectandome a la base de datos
const mongoose = require('mongoose');
const {DANGEL_APP_MONGODB_HOST,DANGEL_APP_MONGODB_DATABASE} = process.env;
//Creamos el uri de la conexion a mongodb
const MONGODB_URI = `mongodb://${DANGEL_APP_MONGODB_HOST}/${DANGEL_APP_MONGODB_DATABASE}`;

//Ahora nos conectamos a mongo
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(db => console.log('Conectado correctamente'))
    .catch(err => console.log(err));