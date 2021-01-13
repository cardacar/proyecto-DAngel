require('dotenv').config();
const app = require('./index');
require('./database')

app.listen(app.get('port'), ()=>{
    console.log('App en el puerto ',app.get('port'));
})