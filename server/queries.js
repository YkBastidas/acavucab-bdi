
const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'acavucab',
  password: '170599',
  port: 5432,
} //PostgreSQL database configuration

const Pool = require('pg').Pool
const pool = new Pool(config)
const bcrypt = require('bcryptjs')
const passport= require('passport')

//GET_QUERIES
const getEvents = (request, response) => {
  pool.query('SELECT * FROM evento ORDER BY fecha_inicio DESC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getDirecciones = (request, response) => {
  pool.query('SELECT * FROM direccion ORDER BY clave ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getTiendaFisica= (request, response ) => {
  const query = "SELECT * FROM tienda WHERE tipo = 'fisica'"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getDireccionPorClave = (request, response ) => {
  if(request.query != "{}"){
    let direccion = ""
    let values = [request.query.clave]
    const query = 'SELECT * FROM direccion WHERE clave = $1'
    pool.query(query, values, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  else response.status(404)
}
const getDireccionPorNombreTipoFK = (request, response ) =>{
  let values = [request.query.nombre, request.query.tipo, request.query.fk_direccion]
  const query = 'SELECT * FROM direccion WHERE nombre = $1 AND tipo = $2 AND fk_direccion = $3'
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getDireccionPorNombreTipo = (request, response ) =>{
  let values = [request.query.nombre, request.query.tipo]
  const query = 'SELECT * FROM direccion WHERE nombre = $1 AND tipo = $2'
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getClientePorRif = (request, response) =>{
    let values = [request.query.clave]
    const query = 'SELECT * FROM cliente WHERE rif = $1'
    pool.query(query, values, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}
const getClientePorCedula = (request, response) =>{
  let values = [request.query.clave]
  const query = 'SELECT * FROM cliente WHERE natural_ci = $1'
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getClientePorUserID = (request, response) =>{
	let values = [request.query.fk_usuario]
  const query = 'SELECT * FROM cliente WHERE fk_usuario = $1'
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getUsuarioPorNombre = (request, response) =>{
  let values = [request.query.nombre]
  const query = 'SELECT * FROM usuario WHERE nombre = $1'
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getUserInfo =  (request, response) => { // GET USER INFO IF VALIDATED
  if(request.user){
    console.log('Las cookies son -->', request.cookies)
  	console.log('El user es  -->', request.user[0])
    response.send(request.user[0])
  }
  else response.send('errorNoUser')
}
const getTelefonosPorCliente= (request, response ) => {
  let values = [request.query.foreignKey]
  const query = "SELECT numero FROM telefono WHERE fk_cliente = $1"
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getTelefonosPorPersonal= (request, response ) => {
  let values = [request.query.foreignKey]
  const query = "SELECT numero FROM telefono WHERE fk_personal = $1"
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getEmailsPorCliente= (request, response ) => {
  let values = [request.query.foreignKey]
  const query = "SELECT direccion FROM correo_electronico WHERE fk_cliente = $1"
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getContactosPorCliente= (request, response ) => {
  let values = [request.query.foreignKey]
  const query = "SELECT * FROM persona_contacto WHERE fk_cliente = $1"
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getUsuarioPorID= (request, response ) => {
  let values = [request.query.primaryKey]
  const query = "SELECT * FROM usuario WHERE id = $1"
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPersonalPorUserID=(request, response) =>{
  let values = [request.query.fk_usuario]
  const query = "SELECT * FROM personal WHERE fk_usuario = $1"
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getRolPorUserID=(request, response) =>{
  let values = [request.query.fk_rol]
  const query = "SELECT nombre FROM rol WHERE clave = $1"
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getEmpleadoPorCedula = (request, response) =>{
  let values = [request.query.clave]
  const query = 'SELECT * FROM personal WHERE ci = $1'
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getRoles = (request, response) => {
  pool.query('SELECT * FROM rol', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getHistoricoInventarioCerveza = (request,response) => {
  const text = 'SELECT * FROM historico_inventario_cerveza WHERE fk_cerveza=$1 and fecha_fin=null'
  const values = [request.body.fk_cerveza]
  pool.query(text,values,(error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getTotalFacturaVenta = (request,response,next) => {
  const text = 'SELECT SUM(cantidad*precio_unitario) FROM detalle_venta WHERE fk_venta = $1'
  const values = [request.body.fk_venta]
  pool.query(text,values,(error,response)=>{
    if(error){
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getTotalFacturaCompra = (request,response,next) => {
  const text = 'SELECT SUM(cantidad*precio_unitario) FROM detalle_compra WHERE fk_venta = $1';
  const values = [request.body.fk_venta];
  pool.query(text,values,(error,response)=>{
    if(error){
      console.log('ERROR DE REGISTRO: '+error);
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getTasaActual = (request,response,next) => {
  const text = 'SELECT (numero_cambio) FROM historico_tasa WHERE fecha_fin is null AND tipo=$1';
  const values = [request.body.tipo]
  pool.query(text,values,(error,response)=>{
    if(error){
      console.log('ERROR DE BUSQUEDA: '+error)
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getTasaPuntosActual = (request,response,next) => {
  const text = 'SELECT (numero_cambio) FROM historico_valor_puntos WHERE fecha_fin is null';
  pool.query(text,(error,response)=>{
    if(error){
      console.log('ERROR DE BUSQUEDA: '+error);
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getCervezas = (request, response) => {
  pool.query('SELECT * FROM cerveza_artesanal', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getCantidadPorIdCerveza = (request, response) =>{
  const text = 'SELECT cant_disponible from historico_inventario_cerveza where fk_cerveza=$1 order by fecha_inicio DESC limit 1'
  const values = [request.query.fk_cerveza]
  pool.query(text, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getUsuarios = (request, response) =>{
  pool.query('SELECT * FROM usuario', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getLogout = (request,response) =>{
  request.logout()
  request.session = null
  response.send('Sesion finalizada en server')
}
/*
const getEmpleados= (request, response ) => {
  const query = "SELECT * FROM personal"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getLager= (request, response ) => {
  const query = "SELECT * FROM lager"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getAle= (request, response ) => {
  const query = "SELECT * FROM ale"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getIngrediente= (request, response ) => {
  const query = "SELECT * FROM ingrediente"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getCervezaArtesanal= (request, response ) => {
  const query = "SELECT * FROM cerveza_artesanal"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getCervezaPorNombre = (request, response) =>{
  let values = [request.query.nombre]
  const query = 'SELECT * FROM cerveza_artesanal WHERE nombre = $1'
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getHistoriaCerveza = (request, response) =>{
  const query = 'SELECT * FROM historia_cerveza'
  pool.query(query, values, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getReceta= (request, response ) => {
  const query = "SELECT * FROM receta"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getRecetaIngrediente= (request, response ) => {
  const query = "SELECT * FROM receta_ingre"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getCaracteristica= (request, response ) => {
  const query = "SELECT * FROM caracteristica"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getCervezaCaracteristica= (request, response ) => {
  const query = "SELECT * FROM cerveza_caracteristica"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getDepartamento= (request, response ) => {
  const query = "SELECT * FROM departamento"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPrivilegio= (request, response ) => {
  const query = "SELECT * FROM privilegio"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getRol= (request, response ) => {
  const query = "SELECT * FROM rol"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getRolPrivilegio= (request, response ) => {
  const query = "SELECT * FROM rol_privilegio"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getMotivosLaboralesPorNombre= (request, response ) => {
  let values = [request.query.nombre]
  const query = "SELECT * FROM motivos_laborales"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getHorario= (request, response ) => {
  const query = "SELECT * FROM horario"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getBeneficio= (request, response ) => {
  const query = "SELECT * FROM beneficio"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPersonalBeneficio= (request, response ) => {
  const query = "SELECT * FROM personal_beneficio"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPersonalHorario= (request, response ) => {
  const query = "SELECT * FROM personal_horario"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getProveedor= (request, response ) => {
  const query = "SELECT * FROM proveedores"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getProveedorPorNombre= (request, response ) => {
  let values = [request.query.nombre]
  const query = "SELECT * FROM proveedores"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getCervezaProveedor= (request, response ) => {
  const query = "SELECT * FROM cerveza_proveedor"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getEventoProveedor= (request, response ) => {
  const query = "SELECT * FROM evento_proveedor"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPasillo= (request, response ) => {
  const query = "SELECT * FROM pasillo"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getZona= (request, response ) => {
  const query = "SELECT * FROM zona"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getVenta= (request, response ) => {
  const query = "SELECT * FROM venta"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getDetalleVenta= (request, response ) => {
  const query = "SELECT * FROM detalle_venta"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getStatus= (request, response ) => {
  const query = "SELECT * FROM status"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getStatusVenta= (request, response ) => {
  const query = "SELECT * FROM status_venta"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getComentarioCerveza= (request, response ) => {
  const query = "SELECT * FROM comentario_cerveza"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getCompra= (request, response ) => {
  const query = "SELECT * FROM compra"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getDetalleCompra= (request, response ) => {
  const query = "SELECT * FROM detalle_compra"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getInventario= (request, response ) => {
  const query = "SELECT * FROM inventario"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getHistoricoInventario= (request, response ) => {
  const query = "SELECT * FROM historico_inventario_cerveza"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getHistoricoPuntos= (request, response ) => {
  const query = "SELECT * FROM historico_puntos_cliente"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPersonaContacto= (request, response ) => {
  const query = "SELECT * FROM persona_contacto"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPagoCredito= (request, response ) => {
  const query = "SELECT * FROM tipo_pago_credito"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPagoDebito= (request, response ) => {
  const query = "SELECT * FROM tipo_pago_debito"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPagoEfectivo= (request, response ) => {
  const query = "SELECT * FROM tipo_pago_efectivo"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPagoCheque= (request, response ) => {
  const query = "SELECT * FROM tipo_pago_cheque"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getHistoricoTasa= (request, response ) => {
  const query = "SELECT * FROM historico_tasa"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPagoDivisa= (request, response ) => {
  const query = "SELECT * FROM tipo_pago_divisa"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getHistoricoValorPuntos= (request, response ) => {
  const query = "SELECT * FROM historico_valor_puntos"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPagoPuntos= (request, response ) => {
  const query = "SELECT * FROM tipo_pago_puntos"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getCuotaAfiliacion= (request, response ) => {
  const query = "SELECT * FROM cuota_afiliacion"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPago= (request, response ) => {
  const query = "SELECT * FROM pago"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getStatusCompra= (request, response ) => {
  const query = "SELECT * FROM status_compra"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getDescuento= (request, response ) => {
  const query = "SELECT * FROM descuento"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
*/
// POST_QUERIES
const postRegistro = (request, response, next) =>{
  console.log(request.body)
  if(request.body.tipo === 'Natural'){
    const text = 'INSERT INTO public.cliente(rif, tipo, fk_direccion_fisica, natural_ci, natural_nombre, natural_apellido, natural_genero, natural_fecha_nacimiento, fk_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *'
    const values = [request.body.rif, request.body.tipo, request.body.fk_direccion, request.body.ci, request.body.nombre, request.body.apellido, request.body.genero,request.body.fecha_nacimiento, request.body.fk_usuario]
      pool.query(text, values, (error, results) => {
      if (error) {
        console.log('ERROR DE REGISTRO: '+error)
        throw error
      }
      response.status(201).send(results.rows)
    })
  }
  else{
    const text = 'INSERT INTO public.cliente(rif, tipo, fk_direccion_fisica, juridico_denominacion_comercial, juridico_razon_social, juridico_pagina_web, juridico_capital, juridico_fk_direccion_fiscal, fk_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *'
    const values = [request.body.rif, request.body.tipo, request.body.fk_direccionPrincipal, request.body.denominacionComercial, request.body.razonSocial, request.body.paginaWeb, request.body.capital,request.body.fk_direccionFiscal, request.body.fk_usuario]
      pool.query(text, values, (error, results) => {
      if (error) {
        console.log('ERROR DE REGISTRO: '+error)
        throw error
      }
      response.status(201).send(results.rows)
    })
  }
}
const postDireccion = (request, response) =>{
  console.log(request.body)
  const text = 'INSERT INTO public.direccion(tipo, nombre, fk_direccion) VALUES ($1, $2, $3) RETURNING *'
  const values = [request.body.tipo, request.body.nombre, request.body.fk_direccion]
    pool.query(text, values, (error, results) => {
      if (error) {
        console.log('ERROR DE CREACION DE DIRECCION: '+error)
        throw error
      }
      response.status(201).send(results.rows)
    })
}
const postUsuario = (request, response, next) => {
  console.log(request.body)
  const text = 'INSERT INTO public.usuario(nombre, contrasena, fk_rol) VALUES ($1, $2, $3) RETURNING *'
  const values = [request.body.nombre, request.body.contrasena, request.body.rol]
  pool.query(text, values, (error, results) => {
    if (error) {
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(201).send(results.rows)
  })
}
const postEmail = (request, response, next) => {
  console.log(request.body)
  const text = 'INSERT INTO public.correo_electronico(direccion, fk_cliente) VALUES ($1, $2) RETURNING *'
  const values = [request.body.correo, request.body.foreignKey]
  pool.query(text, values, (error, results) => {
    if (error) {
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(201).send(results.rows)
  })
}
const postTelefonoCliente = (request, response, next) => {
  console.log(request.body)
  const text = 'INSERT INTO public.telefono(numero, fk_cliente) VALUES ($1, $2) RETURNING *'
  const values = [request.body.telefono, request.body.foreignKey]
  pool.query(text, values, (error, results) => {
    if (error) {
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(201).send(results.rows)
  })
}
const postPersonaContacto = (request, response, next) => {
  console.log(request.body)
  const text = 'INSERT INTO public.persona_contacto(nombre, numero, fk_cliente) VALUES ($1, $2, $3) RETURNING *'
  const values = [request.body.nombre, request.body.numero, request.body.foreignKey]
  pool.query(text, values, (error, results) => {
    if (error) {
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(201).send(results.rows)
  })
}
const postSignIn = (req, res, next) => {
	passport.authenticate('local', function(err, user, info) {
		console.log('Dentro de passport.authenticate() callback')
    console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
		if (err) { return next(err) }
	  if (!user || user === false) { console.log('no usuario'); return res.send(false) }
	  req.logIn(user, function(err) {
			if (err) { return next(err) }
			console.log('Dentro del req.login() callback')
			console.log('User', user)
			console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
	    console.log(`req.user: ${JSON.stringify(req.user)}`)
			return res.send('login exitoso')
	  })
	})(req, res, next)
}
const postEmpleado = (request, response, next) => {
  const text = 'INSERT INTO public.personal(nombre, apellido, ci, salario, cargo, genero, fk_usuario, fk_direccion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *'
  const values = [request.body.nombre, request.body.apellido, request.body.ci, request.body.salario, request.body.cargo, request.body.genero, request.body.fk_usuario, request.body.fk_direccion]
  pool.query(text, values, (error, results) => {
    if (error) {
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(201).send(results.rows)
  })
}
const postTelefonoPersonal = (request, response, next) => {
  console.log(request.body)
  const text = 'INSERT INTO public.telefono(numero, fk_personal) VALUES ($1, $2) RETURNING *'
  const values = [request.body.telefono, request.body.foreignKey]
  pool.query(text, values, (error, results) => {
    if (error) {
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(201).send(results.rows)
  })
}
const postHistoricoInventarioCerveza = (request,response,next) => {
  console.log(request.body)
  const text = 'INSERT (cant_disponible,fecha_inicio,fk_cerveza) INTO historico_inventario_cerveza VALUES ($1,$2,$3)'
  const values = [request.body.cant_disponible,request.body.fecha_inicio,request.body.fk_cerveza]
  pool.query(text,values,(error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(201).send('Ok')
  })
}
const postOrdenDeReposicion = (request, response, next) => {
  console.log(request.body)
  const text = 'INSERT INTO public.venta (fecha,total) VALUES (current_date,0) RETURNING nro_factura'
  pool.query(text, (error, response) => {
    if (error){
      console.log('ERROR DE REGISTRO:'+error)
      throw error
    }
    response.status(201).send(response.rows)
  })
}
const postDetalleVenta = (request,response,next) => {
  const text = 'INSERT INTO public.detalle_venta (cantidad,precio_unitario,fk_venta,fk_historico_inventario) VALUES ($1,$2,$3,$4) RETURNING codigo'
  const values = [request.body.cantidad,request.body.precio_unitario,request.body.fk_venta,request.body.fk_historico_inventario]
  pool.query(text,values, (error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(201).send(response.rows)
  })
}
const postInventarioActualizado = (request,response,next) => {
  const text = 'INSERT INTO historico_inventario_cerveza (cant_disponible,fecha_inicio,fk_cerveza) VALUES ($1,current_date,$2)';
  const values = [request.body.cant_disponible,request.body.fk_cerveza];
  pool.query(text,values,(error,response)=>{
    if(error){
      console.log('ERROR DE REGISTRO: '+error);
      throw error
    }
    response.status(201).send('Ok')
  })
}
const postCompra = (request, response, next) => {
  if(request.body.tipo_compra=='Fisica'){
    const text = 'INSERT INTO public.compra (fecha,total,fk_cliente,fk_tienda_fisica) VALUES (current_date,0,$1,$2) RETURNING nro_factura'
    const values = [request.body.fk_cliente,request.body.fk_tienda_fisica]
    pool.query(text, (error, response) => {
     if (error){
       console.log('ERROR DE REGISTRO:'+error)
       throw error
     }
     response.status(201).send(response.rows)
    })
  }
  else{
    const text = 'INSERT INTO public.compra (fecha,total,fk_cliente,fk_tienda_virtual) VALUES (current_date,0,$1,$2) RETURNING nro_factura';
    const values = [request.body.fk_cliente,request.body.fk_tienda_virtual];
    pool.query(text, (error, response) => {
     if (error){
       console.log('ERROR DE REGISTRO:'+error)
       throw error
     }
    })
  }
  return response.redirect('/');
}
const postDetalleCompra = (request,response,next) => { //REVISAR
  const text = 'INSERT INTO public.detalle_compra (cantidad,k_compra,fk_historico_inventario) VALUES ($1,$2,$3,$4) RETURNING codigo'
  const values = [request.body.cantidad,request.body.fk_compra,request.body.fk_historico_inventario]
  pool.query(text,values, (error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(201).send(response.rows)
  })
}
const postStatusCompra = (request,response,next) => {
  const text = 'INSERT INTO public.status_compra (fecha_cambio,fk_status,fk_compra,fk_departamento) VALUES (current_date,$1,$2,$3)';
  const values = [request.body.fk_status,request.body.fk_compra,request.body.fk_departamento];
  pool.query(text,values, (error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error);
      throw error
    }
    response.status(201).send('Ok')
  })
}
const postTarjetaCredito = (request,response,next) => {
  console.log(request.body);
  const text = 'INSERT (banco,numero,tipo,cvc,nombre_impreso,cedula,fk_cliente) INTO public.tipo_pago_credito VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING codigo';
  const values = [request.body.banco,request.body.numero,request.body.tipo,request.body.cvc,request.body.nombre_impreso,request.body.cedula,request.body.fk_cliente];
  pool.query(text,values,(error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error);
      throw error
    }
    response.status(201).send('Ok')
  })
}
const postTarjetaDebito = (request,response,next) => {
  console.log(request.body);
  const text = 'INSERT (banco,numero,tipo,cvc,nombre_impreso,cedula,fk_cliente) INTO public.tipo_pago_debito VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING codigo';
  const values = [request.body.banco,request.body.numero,request.body.tipo,request.body.cvc,request.body.nombre_impreso,request.body.cedula,request.body.fk_cliente];
  pool.query(text,values,(error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error);
      throw error
    }
    response.status(201).send('Ok')
  })
}
const postEfectivo = (request,response,next) => {
  const text = 'INSERT (denominacion,cantidad,fk_cliente) INTO public.tipo_pago_efectivo VALUES ($1,$2,$3) RETURNING codigo';
  const values = [request.body.denominacion,request.body.cantidad,request.body.fk_cliente];
  pool.query(text,values,(error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error);
      throw error
    }
    response.status(201).send('Ok')
  })
}
const postCheque = (request,response,next) => {
  const text = 'INSERT (banco,numero_cuenta,numero_cheque,fk_cliente) INTO public.tipo_pago_cheque VALUES ($1,$2,$3,$4) RETURNING codigo';
  const values = [request.body.banco,request.body.numero_cuenta,request.body.numero_cheque,request.body.fk_cliente];
  pool.query(text,values,(error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error);
      throw error
    }
    response.status(201).send('Ok')
  })
}
const postDivisa = (request,response,next) => {
  const text = 'INSERT (tipo,fk_historico_tasa,fk_cliente,cantidad) INTO public.tipo_pago_divisa VALUES ($1,$2,$3,$4) RETURNING codigo';
  const values = [request.body.tipo,request.body.fk_historico_tasa,request.body.fk_cliente,request.body.cantidad];
  pool.query(text,values,(error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error);
      throw error
    }
    response.status(201).send('Ok')
  })
}
const postPagoPuntos = (request,response,next) => {
  console.log(request.body);
  const text = 'INSERT (cantidad,fk_historico_valor_puntos,fk_cliente) INTO public.tipo_pago_puntos VALUES ($1,$2,$3) RETURNING codigo';
  const values = [request.body.cantidad,request.body.fk_historico_valor_puntos,request.body.fk_cliente];
  pool.query(text,values,(error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error);
      throw error
    }
    response.status(201).send('Ok')
  })
}
const postPago = (request,response,next) => {
  const text = 'INSERT (monto,fk_compra,fk_tipo_pago_credito,fk_tipo_debito,fk_tipo_pago_cheque,fk_tipo_pago_cheque,fk_tipo_pago_efectivo,fk_tipo_pago_puntos,fk_tipo_divisa,fk_cuota_afiliacion) INTO public.pago VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)';
  const values = [request.body.monto,request.body.fk_compra,request.body.fk_tipo_pago_credito,request.body.fk_tipo_pago_debito,request.body.fk_tipo_pago_cheque,request.body.fk_tipo_pago_cheque,request.body.fk_tipo_pago_efectivo,request.body.fk_tipo_pago_puntos,request.body.fk_tipo_divisa,request.body.fk_cuota_afiliacion]
  pool.query(text,values,(error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error);
      throw error
    }
    response.status(201).send('Ok')
  })
}
const postPagoProveedores = (request,response,next) => {
  const text = 'INSERT (monto,fk_tipo_pago_efectivo) INTO pago VALUES ($1,$2)';
  const values = [request.body.monto,request.body.tipo_pago_efectivo];
  pool.query(text,values,(error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error);
      throw error
    }
    response.status(201).send('Ok')
  })
}
const postCuotaDeAfiliacion = (request,response,next) => {
  console.log(request.body);
  const text = 'INSERT (inversion,fecha_fk_proveedor) INTO cuota_afiliacion VALUES ($1,current_date,$2)';
  const values = [request.body.inversion,request.body.fk_proveedor];
  pool.query(text,values,(error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error);
      throw error
    }
    response.status(201).send('Ok')
  })
}
// PUT_QUERIES
const putHistoricoInventarioCerveza = (request,response,next) => {
  const text = 'UPDATE historico_inventario_cerveza SET fecha_fin=current_date AND fk_detalle_compra = $1 AND fk_detalle_venta = $2 AND fk_inventario = $3 WHERE fk_cerveza = $4 AND fecha_fin = null'
  const values = [request.body.fk_detalle_compra,request.body.fk_detalle_venta,request.body.fk_inventario,request.body.fk_cerveza]
  pool.query(text,values,(error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(200).send('Ok')
    response.status(204).send('NotOk')
  })
}
const putTotalFactura = (request,response,next) => {
  console.log(request.body)
  if(request.body.tipo=='Venta'){
   const text = 'UPDATE venta SET total=$1 WHERE nro_factura=$2'
   const values = [request.body.total,request.body.nro_factura]
   pool.query(text,values,(error,response)=> {
     if(error){
       console.log('ERROR DE REGISTRO: '+error)
       throw error
     }
     response.status(200).send('Ok')
     response.status(204).send('NotOk')
   })
  }
  else{
   const text = 'UPDATE compra SET total=$1 WHERE nro_factura=$2'
   const values = [request.body.total,request.body.nro_factura]
   pool.query(text,values,(error,response)=> {
     if(error){
       console.log('ERROR DE REGISTRO: '+error)
       throw error
     }
     response.status(200).send('Ok')
     response.status(204).send('NotOk')
   })
  }
}
const putInventarioPorVenta = (request,response,next) =>{
  console.log(request.body);
  const text = 'UPDATE historico_inventario_cerveza SET fecha_fin=current_date AND fk_venta=$1 WHERE fecha_fin=null AND fk_cerveza=$2 RETURNING cantidad';
  const values = [request.body.fk_venta,request.body.fk_cerveza];
  pool.query(text,values,(error,response) => {
    if(error){
      console.log('ERROR DE REGISTRO: '+error);
      throw error
    }
    response.status(200).json(results.rows)
    response.status(204).send('NotOk')
  })
}

/*const postEvento = (request, response, next) => {
  console.log(request.body)
  const text = 'INSERT INTO public.personal(fecha_inicio, fecha_fin, nombre, cant_entrada_vendida, cant_entrada_disponible) VALUES ($1, $2, $3, $4, $5) RETURNING *'
  const values = [request.body.fecha_inicio, request.body.fecha_fin, request.body.nombre, request.body.cant_entrada_vendida, request.body.cant_entrada_disponible]
  pool.query(text, values, (error, response) => {
    if (error) {
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
  })
  return response.redirect('/')
}*/


module.exports = {
  config,
  //GET_EXPORTS
  getEvents,
  getDirecciones,
  getDireccionPorClave,
  getDireccionPorNombreTipo,
  getDireccionPorNombreTipoFK,
  getClientePorRif,
  getClientePorCedula,
	getClientePorUserID,
  getUsuarioPorNombre,
  getTiendaFisica,
	getUserInfo,
  getTelefonosPorCliente,
  getTelefonosPorPersonal,
  getEmailsPorCliente,
  getContactosPorCliente,
  getUsuarioPorID,
  getPersonalPorUserID,
  getRolPorUserID,
  getEmpleadoPorCedula,
  getRoles,
  getHistoricoInventarioCerveza,
  getTotalFacturaVenta,
  getTotalFacturaCompra,
  getTasaActual,
  getTasaPuntosActual,
  getCervezas,
  getCantidadPorIdCerveza,
  getUsuarios,
  getLogout,
  /*
	getEmpleados,
  getLager,
  getAle,
  getIngrediente,
  getCervezaArtesanal,
  getCervezaPorNombre,
  getHistoriaCerveza,
  getReceta,
  getRecetaIngrediente,
  getCaracteristica,
  getCervezaCaracteristica,
  getDepartamento,
  getPrivilegio,
  getRol,
  getRolPrivilegio,
  getMotivosLaboralesPorNombre,
  getHorario,
  getBeneficio,
  getPersonalBeneficio,
  getPersonalHorario,
  getProveedor,
  getProveedorPorNombre,
  getCervezaProveedor,
  getEventoProveedor,
  getPasillo,
  getZona,
  getVenta,
  getDetalleVenta,
  getStatus,
  getStatusVenta,
  getComentarioCerveza,
  getCompra,
  getDetalleCompra,
  getInventario,
  getHistoricoInventario,
  getHistoricoPuntos,
  getPersonaContacto,
  getPagoCredito,
  getPagoDebito,
  getPagoEfectivo,
  getPagoCheque,
  getHistoricoTasa,
  getPagoDivisa,
  getHistoricoValorPuntos,
  getPagoPuntos,
  getCuotaAfiliacion,
  getPago,
  getStatusCompra,
  getDescuento,
*/
  //POST_EXPORTS
  postUsuario,
  postRegistro,
  postDireccion,
  postEmail,
  postTelefonoCliente,
  postPersonaContacto,
	postSignIn,
  postEmpleado,
  postTelefonoPersonal,
  postHistoricoInventarioCerveza,
  postOrdenDeReposicion,
  postDetalleVenta,
  postInventarioActualizado,
  postCompra,
  postDetalleCompra,
  postStatusCompra,
  postTarjetaCredito,
  postTarjetaDebito,
  postEfectivo,
  postCheque,
  postDivisa,
  postPagoPuntos,
  postPago,
  postPagoProveedores,
  postCuotaDeAfiliacion,
  //PUT_EXPORTS
  putHistoricoInventarioCerveza,
  putTotalFactura,
  putInventarioPorVenta,
	//AUTH_FUNCTIONS_EXPORTED
	isLogged : function(req, res, next){
		if (req.isAuthenticated()) {
    		return next()
    	}
    	res.redirect('/')
 	 },
  logout: function(req, res, next) {
  	req.logout()
    req.session = null
    res.send('Sesion finalizada en server')
  }
}
