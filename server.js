/**
 * @name server.js
 */


const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
//setqings

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes
app.use(require('./scr/routers/routes_cliente'));
app.use(require('./scr/routers/routes_empresa'));


//Inicializar el servidor
app.listen(3000, () => {
    console.log(`Server is running on port ${app.get('port')}`);
});