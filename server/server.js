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
  origin: 'http://localhost:3000',
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
const db = require('./queries') // Look for the queries file to set the HTTP request method, the endpoint URL path, and the relevant function
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
  res.header('Access-Control-Expose-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//GET ROUTES
router.get('/read/eventos', db.getEvents) // GET ALL EVENTS
router.get('/read/direcciones', db.getDirecciones) // GET ALL ADDRESSES
router.get('/read/direccionPorClave', db.getDireccionPorClave) // GET ADDRESS BY ID
router.get('/read/direccionPorNombreTipo', db.getDireccionPorNombreTipo) // GET ADDRESS BY Name and Type
router.get('/read/direccionPorNombreTipoFK', db.getDireccionPorNombreTipoFK) // GET ADDRESS Name and Type and FK
router.get('/read/clientePorRif', db.getClientePorRif) // GET CLIENTE BY RIF
router.get('/read/clientePorCedula', db.getClientePorCedula) // GET CLIENTE BY CI
router.get('/read/clientePorUserId', db.getClientePorUserID) //GET CLIENTE BY USER ID
router.get('/read/usuarioPorNombre', db.getUsuarioPorNombre) // GET USER BY NAME
router.get('/read/tiendaFisica', db.getTiendaFisica) // GET REAL SHOP DATA
router.get('/read/userInfo', db.getUserInfo) //GET USER INFO IF AUTHENTICATED
router.get('/read/telefonosPorCliente', db.getTelefonosPorCliente) //GET CLIENT'S TEL NUMBERS
router.get('/read/telefonosPorPersonal', db.getTelefonosPorPersonal) //GET PERSONAL'S TEL NUMBERS
router.get('/read/emailsPorCliente', db.getEmailsPorCliente) //GET CLIENT'S EMAILS
router.get('/read/contactosPorCliente', db.getContactosPorCliente) //GET CLIENT'S EMAILS
router.get('/read/usuarioPorID', db.getUsuarioPorID) //GET USER BY ID
router.get('/read/personalPorUserID', db.getPersonalPorUserID) //GET PERSONAL BY USER ID
router.get('/read/rolPorID', db.getRolPorUserID) //GET USER ROLE BY IT'S ID
router.get('/read/empleadoPorCedula', db.getEmpleadoPorCedula) // GET EMPLOYEE BY CI
router.get('/read/roles', db.getRoles) // GET ALL ROLES
router.get('/read/divisaTasa', db.getTasaActual) //GET TIPO DE CAMBIO
router.get('/read/cervezas', db.getCervezas) //GET ALL BEERS
router.get('/read/cantidadPorIdCerveza', db.getCantidadPorIdCerveza) //GET QUANTITY OF A BEER IN INVENTORY
router.get('read/totalFacturaCompra',db.getTotalFacturaCompra) //TE DEVUELTE EL TOTAL DE UNA FACTURA DETERMINADA

//POST ROUTES
router.post('/create/usuario', db.postUsuario) //CREATE NEW USER
router.post('/create/registro', db.postRegistro) // CREATE NEW CLIENT
router.post('/create/direccion', db.postDireccion) // CREATE A NEW ADDRESS
router.post('/create/email', db.postEmail) // CREATE A NEW EMAIL
router.post('/create/telefonoCliente', db.isLogged, db.postTelefonoCliente) // CREATE A NEW PHONE FOR CLIENT
router.post('/create/personaContacto', db.postPersonaContacto) // CREATE A NEW CONTACT PERSON
router.post('/create/registroEmpleado', db.postEmpleado) //CREATE A NEW EMPLOYEE
router.post('/create/telefonoPersonal', db.postTelefonoPersonal) //CREATE A NEW PHONE FOR EMPLOYEE
router.post('/create/creditCard',db.postTarjetaCredito) //CREATE A CREDIT CARD
router.post('/create/debitCard',db.postTarjetaDebito) //CREATE A DEBIT CARD
router.post('/create/pagoPuntos',db.postPagoPuntos) //CREATE PUNTOS
router.post('/create/cheque', db.postCheque) //CREATE CHEQUE
router.post('/create/cash', db.postEfectivo) //CREATE CASH
router.post('/create/divisa', db.postDivisa) //CREATE DIVISA
router.post('/create/pago',db.postPago) //REGISTRA EL PAGO DE LA COMPRA
router.post('/create/compra',db.postCompra) //INICIALIZA LA COMPRA PARA OBTENER SU PK
router.post('/create/detalleCompra', db.postDetalleCompra) //REGISTRA DETALLE DE LAS COMPRAS
router.post('/create/statusCompra',db.postStatusCompra) //REGISTRA STATUS EN LAS COMPRAS

//PUT ROUTES
router.put('/update/totalFactura',db.putTotalFactura) //COLOCA EL TOTAL DE LA FACTURA DESPUES DE INSERTAR LOS DETALLES (VALIDO PARA COMPRA O VENTA)


//AUTHENTICATION
router.post('/auth/signIn', db.postSignIn) // AUTHENTICATE USER AND LOGIN
router.get('/auth/logout', db.getLogout) // CLOSE USER SESSION

//LISTEN THE SERVER IN THE PORT
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
