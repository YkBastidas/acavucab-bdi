//require('dotenv').config();

const express = require('express'); // framework de node para gestionar rutas/servidor
const bodyParser = require('body-parser'); // permite leer la data de las forms en req.body
const path = require('path'); //une fragmentos de url
const passport = require('passport'); //permite gestionar sesiones del usuario
const morgan = require('morgan'); //loggea las request en la consola (para debuggear)
const cookieParser = require('cookie-parser'); //permite leer las cookies
const cors = require('cors');
const cookieSession = require('cookie-session');
var corsOptions = {
  origin: 'localhost:3000',
  credentials : true
 }

const helmet = require('helmet'); //escribe los headers de las requests
const publicPath = path.join(__dirname, '..', 'client', 'build');
const PORT = process.env.PORT || 8000; // numero del puerto a escuchar
const router = require('./routes/routes.js'); // conecta las rutas


const app = express();

app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']) 

app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static(path.join(publicPath))); //une server y cliente
app.use(bodyParser.json()); 
app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(cors(corsOptions));
app.use(helmet()); 


app.use(cookieSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
require('./middleware/passport.js')(passport);

//Usa las rutas
app.use('/', router);
app.use('/bd/tipocerveza', router);
app.use('/bd/eventos', router);
app.use('/bd/agregarevento', router);
app.use('/bd/modificarevento', router);
app.use('/bd/eliminarevento', router);
app.use('/bd/tienda', router);
app.use('/bd/personal', router);
app.use('/bd/modificarpersonal', router);
app.use('/bd/añadirpersonal', router);
app.use('/bd/eliminarpersonal', router);
app.use('/bd/iniciosesion', router);
app.use('/bd/registro', router);
app.use('/bd/contacto', router);
app.use('/bd/proveedores', router);
app.use('/bd/fichaproveedor', router);
app.use('/bd/eliminarproveedor', router);
app.use('/bd/modificarproveedor', router);
app.use('/bd/descripcioncerveza', router);
app.use('/bd/agregarcerveza', router);
app.use('/bd/modificarcerveza', router);
app.use('/bd/horarios', router);
app.use('/bd/micuenta', router);
app.use('/bd/descripcionevento', router);
app.use('/bd/contrasena', router);
app.use('/bd/codigoconfirmacion', router);
app.use('/bd/presupuesto', router);
app.use('/bd/carnet', router);
app.use('/bd/listadeseo', router);
app.use('/bd/pedidoscurso', router);
app.use('/bd/pedidoscancelados', router);
app.use('/bd/pedidostiempo', router);
app.use('/bd/pedidos', router);
app.use('/bd/seguridad', router);
app.use('/bd/nombreseguridad', router);
app.use('/bd/correoseguridad', router);
app.use('/bd/numeroseguridad', router);
app.use('/bd/contraseñaseguridad', router);
app.use('/bd/direccion', router);
app.use('/bd/agregardireccion', router);
app.use('/bd/editardireccion', router);
app.use('/bd/eliminardireccion', router);
app.use('/bd/carrito', router);
app.use('/bd/metodopago', router);
app.use('/bd/metodopagotienda', router);

//mandar todo get a front para react router 
app.get('*', (req, res) => {
  console.log(req.sessionID)
  console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
  console.log(`req.user: ${JSON.stringify(req.user)}`)
  res.sendFile(path.join(publicPath, '../client/build/index.html'));
});


//asd
//Error 404
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Comienza el server en el puerto
app.listen(PORT, (err) => {
  if (err) {
    console.log('Hubo un error conectando el servidor', err);
  }
  else { 
    console.log('Usted se ha conectado en el puerto: ', PORT); 
  }
});

module.exports = app;
