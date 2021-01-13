const app = require('./index');

app.listen(app.get('port'), ()=>{
    console.log('App en el puerto ',app.get('port'));
})