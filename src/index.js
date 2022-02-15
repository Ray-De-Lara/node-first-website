// para utilizar los modulos
// express es el framework de node
const express = require('express');
const app = express();

// path arregla las barras de las rutas
const path = require('path');

app.set('port', 3000);
//__dirname pasa el valor del directorio absoluto
app.set('views',path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile )
app.set('view engine', 'ejs');

// middlewares

// routes
app.use(require('./routes/'));

// static files
app.use(express.static(path.join(__dirname, 'public')))

// listening the server
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'))
});