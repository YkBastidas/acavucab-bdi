
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ACAVUCAB',
  password: 'admin',
  port: 5432,
})
var bcrypt = require('bcryptjs');

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

module.exports = {
  getEvents,
  getDirecciones,
  getDireccionPorClave,
  getDireccionPorNombreTipo,
  getDireccionPorNombreTipoFK,
  getClientePorRif,
  getClientePorCedula,
  getUsuarioPorNombre,
  getTiendaFisica,
  postUsuario,
  postRegistro,
  postDireccion
}
