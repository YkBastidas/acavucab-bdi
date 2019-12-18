//INITIALIZING THE SERVER
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
const publicPath = path.join(__dirname, '..', 'client', 'build')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
;
app.use(express.static(path.join(publicPath)))

/* Look for te queries file set the HTTP request method,
the endpoint URL path, and the relevant function */
const db = require('./queries.js')

app.get('/ping', (req, res) => {
  return res.send('pong')
}) //TESTING THE SERVER
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
}) //serve the static build of the React app

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

app.get('/read/eventos', db.getEvents) // GET ALL EVENTS
app.get('/read/direcciones', db.getDirecciones) // GET ALL ADDRESSES
app.get('/read/direccionPorClave', db.getDireccionPorClave) // GET ADDRESS BY ID
app.get('/read/direccionPorNombreTipo', db.getDireccionPorNombreTipo) // GET ADDRESS BY Name and Type
app.get('/read/direccionPorNombreTipoFK', db.getDireccionPorNombreTipoFK) // GET ADDRESS Name and Type and FK
app.get('/read/clientePorRif', db.getClientePorRif) // GET CLIENTE BY RIF
app.get('/read/clientePorCedula', db.getClientePorCedula) // GET CLIENTE BY RIF
app.get('/read/usuarioPorNombre', db.getUsuarioPorNombre) // GET USER BY NAME
app.get('/read/tiendaFisica', db.getTiendaFisica) // GET REAL SHOP DATA

app.post('/create/usuario', db.postUsuario) //CREATE NEW USER
app.post('/create/registro', db.postRegistro) // CREATE NEW CLIENT
app.post('/create/direccion', db.postDireccion) // CREATE A NEW ADDRESS

//LISTEN THE SERVER IN THE PORT
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
