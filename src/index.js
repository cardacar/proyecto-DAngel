const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');

//Initializations
const app = express();

//Config
//Especifico el puerto
app.set('port', process.env.PORT || 3000);
//Especifico la ruta de las vistas a mostrar
app.set('views', path.join(__dirname + '/views'));
//Configuro el motor de vista, en este caso handlebars 
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middleware
//Uso morgan para saber las peticiones que realiza la app
app.use(morgan('dev'));
//Entendiendo los datos enviados por un formulario
app.use(express.urlencoded({ extended: false }));


//Global variables


//Routes
app.use(require('./routes/index.route'));
app.use(require('./routes/user.route'));
app.use(require('./routes/productDes.route'));



//Static files
app.use(express.static(path.join(__dirname + '/public')));

module.exports = app