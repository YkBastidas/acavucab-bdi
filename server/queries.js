
const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'ACAVUCAB',
  password: 'admin',
  port: 5432,
} //PostgreSQL database configuration

const Pool = require('pg').Pool
const pool = new Pool(config)
const bcrypt = require('bcryptjs');
const passport= require('passport');

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
	console.log('Las cookies son -->', request.cookies);
	console.log('El user es  -->', request.user);
	response.send(request.user);
}

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
const getCorreoElectronico= (request, response ) => {
  const query = "SELECT * FROM correo_electronico"
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
const getTelefono= (request, response ) => {
  const query = "SELECT * FROM telefono"
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

const postRegistro = (request, response, next) =>{
  console.log(request.body);
  if(request.body.tipo === 'Natural'){
    const text = 'INSERT INTO public.cliente(rif, tipo, fk_direccion_fisica, natural_ci, natural_nombre, natural_apellido, natural_genero, natural_fecha_nacimiento, fk_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;';
    const values = [request.body.rif, request.body.tipo, request.body.fk_direccion, request.body.ci, request.body.nombre, request.body.apellido, request.body.genero,request.body.fecha_nacimiento, request.body.fk_usuario];
      pool.query(text, values, (error, results) => {
      if (error) {
        console.log('ERROR DE REGISTRO: '+error)
        throw error
      }
      response.status(201).send(results.rows);
    });
  }
  else{
    const text = 'INSERT INTO public.cliente(rif, tipo, fk_direccion_fisica, juridico_denominacion_comercial, juridico_razon_social, juridico_pagina_web, juridico_capital, juridico_fk_direccion_fiscal, fk_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;';
    const values = [request.body.rif, request.body.tipo, request.body.fk_direccionPrincipal, request.body.denominacionComercial, request.body.razonSocial, request.body.paginaWeb, request.body.capital,request.body.fk_direccionFiscal, request.body.fk_usuario];
      pool.query(text, values, (error, results) => {
      if (error) {
        console.log('ERROR DE REGISTRO: '+error)
        throw error
      }
      response.status(201).send(results.rows);
    });
  }
}
const postDireccion = (request, response) =>{
  console.log(request.body);
  const text = 'INSERT INTO public.direccion(tipo, nombre, fk_direccion) VALUES ($1, $2, $3) RETURNING *;';
  const values = [request.body.tipo, request.body.nombre, request.body.fk_direccion];
    pool.query(text, values, (error, results) => {
      if (error) {
        console.log('ERROR DE CREACION DE DIRECCION: '+error)
        throw error
      }
      response.status(201).send(results.rows);
    })
}
const postUsuario = (request, response, next) => {
  console.log(request.body);
  const text = 'INSERT INTO public.usuario(nombre, contrasena) VALUES ($1, $2) RETURNING *;';
  const values = [request.body.nombre, request.body.contrasena];
  pool.query(text, values, (error, results) => {
    if (error) {
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(201).send(results.rows);
  })
}
const postEmail = (request, response, next) => {
  console.log(request.body);
  const text = 'INSERT INTO public.correo_electronico(direccion, fk_cliente) VALUES ($1, $2) RETURNING *;';
  const values = [request.body.correo, request.body.foreignKey];
  pool.query(text, values, (error, results) => {
    if (error) {
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(201).send(results.rows);
  })
}
const postTelefonoCliente = (request, response, next) => {
  console.log(request.body);
  const text = 'INSERT INTO public.telefono(numero, fk_cliente) VALUES ($1, $2) RETURNING *;';
  const values = [request.body.telefono, request.body.foreignKey];
  pool.query(text, values, (error, results) => {
    if (error) {
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(201).send(results.rows);
  })
}
const postPersonaContacto = (request, response, next) => {
  console.log(request.body);
  const text = 'INSERT INTO public.persona_contacto(nombre, numero, fk_cliente) VALUES ($1, $2, $3) RETURNING *;';
  const values = [request.body.nombre, request.body.numero, request.body.foreignKey];
  pool.query(text, values, (error, results) => {
    if (error) {
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
    response.status(201).send(results.rows);
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
  console.log(request.body);
  const text = 'INSERT INTO public.personal(nombre, apellido, ci, salario, cargo, genero) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;';
  const values = [request.body.nombre, request.body.apellido, request.body.ci, request.body.salario, request.body.cargo, request.body.genero];
  pool.query(text, values, (error, response) => {
    if (error) {
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
  })
  return response.redirect('/');
}
const postEvento = (request, response, next) => {
  console.log(request.body);
  const text = 'INSERT INTO public.personal(fecha_inicio, fecha_fin, nombre, cant_entrada_vendida, cant_entrada_disponible) VALUES ($1, $2, $3, $4, $5) RETURNING *;';
  const values = [request.body.fecha_inicio, request.body.fecha_fin, request.body.nombre, request.body.cant_entrada_vendida, request.body.cant_entrada_disponible];
  pool.query(text, values, (error, response) => {
    if (error) {
      console.log('ERROR DE REGISTRO: '+error)
      throw error
    }
  })
  return response.redirect('/');
}

module.exports = {
  config,
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
  getCorreoElectronico,
  getCompra,
  getDetalleCompra,
  getInventario,
  getHistoricoInventario,
  getHistoricoPuntos,
  getPersonaContacto,
  getTelefono,
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

  postUsuario,
  postRegistro,
  postDireccion,
  postEmail,
  postTelefonoCliente,
  postPersonaContacto,
	postSignIn,
	//AUTH
	isLogged : function(req, res, next){
		if (req.isAuthenticated()) {
    		return next();
    	}
    	res.redirect('/');
 	 },
  logout: function(req, res, next) {
  	req.logout();
    req.session = null;
    res.send('Sesion finalizada en server')
  }
}
