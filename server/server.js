//INITIALIZING THE SERVER CONSTANTS
const express = require('express') // invoke an instance of express application.
const path = require('path')
const bodyParser = require('body-parser')
const passport = require('passport'); //permite gestionar sesiones del usuario
const morgan = require('morgan'); //loggea las request en la consola (para debuggear)
const cookieParser = require('cookie-parser'); //permite leer las cookies
const cors = require('cors');
const cookieSession = require('cookie-session');
const helmet = require('helmet'); //escribe los headers de las requests
var corsOptions = {
  origin: 'localhost:3000',
  credentials : true
 }
var router = express.Router();

const app = express()
const port = 8000 // set application port
const publicPath = path.join(__dirname, '..', 'client', 'build')

app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])
app.use(bodyParser.json()); app.use(cookieParser()); app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true})) // initialize body-parser to parse incoming parameters requests to req.body
app.use(express.static(path.join(publicPath)))
const db = require('./queries.js') // Look for the queries file to set the HTTP request method, the endpoint URL path, and the relevant function
app.use(morgan('dev')); app.use(helmet());
app.use(cookieSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
require('./passport')(passport);

app.use('/', router);
app.get('/ping', (req, res) => {return res.send('pong')}) //TESTING THE SERVER
//mandar todo get a front para react router
app.get('*', (req, res) => {
  console.log(req.sessionID)
  console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
  console.log(`req.user: ${JSON.stringify(req.user)}`)
  res.sendFile(path.join(publicPath, 'index.html'));
});

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

/*
app.use('/bd/tipocerveza', router);
app.use('/bd/agregarevento', router);
app.use('/bd/modificarevento', router);
app.use('/bd/eliminarevento', router);
app.use('/bd/tienda', router);
app.use('/bd/personal', router);
app.use('/bd/modificarpersonal', router);
app.use('/bd/añadirpersonal', router);
app.use('/bd/eliminarpersonal', router);
app.use('/bd/iniciosesion', router);
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
 */

router.get('/read/eventos', db.getEvents) // GET ALL EVENTS
router.get('/read/direcciones', db.getDirecciones) // GET ALL ADDRESSES
router.get('/read/direccionPorClave', db.getDireccionPorClave) // GET ADDRESS BY ID
router.get('/read/direccionPorNombreTipo', db.getDireccionPorNombreTipo) // GET ADDRESS BY Name and Type
router.get('/read/direccionPorNombreTipoFK', db.getDireccionPorNombreTipoFK) // GET ADDRESS Name and Type and FK
router.get('/read/clientePorRif', db.getClientePorRif) // GET CLIENTE BY RIF
router.get('/read/clientePorCedula', db.getClientePorCedula) // GET CLIENTE BY RIF
router.get('/read/clientePorUserId', db.getClientePorUserID) //GET CLIENTE BY USER ID
router.get('/read/usuarioPorNombre', db.getUsuarioPorNombre) // GET USER BY NAME
router.get('/read/tiendaFisica', db.getTiendaFisica) // GET REAL SHOP DATA
router.get('/read/userInfo', db.getUserInfo) //GET USER INFO IF AUTHENTICATED

router.post('/create/usuario', db.postUsuario) //CREATE NEW USER
router.post('/create/registro', db.postRegistro) // CREATE NEW CLIENT
router.post('/create/direccion', db.postDireccion) // CREATE A NEW ADDRESS
router.post('/create/email', db.postEmail) // CREATE A NEW EMAIL
router.post('/create/telefonoCliente', db.isLogged, db.postTelefonoCliente) // CREATE A NEW EMAIL
router.post('/create/personaContacto', db.postPersonaContacto) // CREATE A NEW CONTACT PERSON

router.post('/auth/signIn', db.postSignIn) // AUTHENTICATE USER AND LOGIN

//LISTEN THE SERVER IN THE PORT
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
