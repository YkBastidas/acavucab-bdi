
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ACAVUCAB',
  password: 'admin',
  port: 5432,
})

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
    let clave = [parseInt(request.query.clave)]
    const query = 'SELECT * FROM direccion WHERE clave = $1'
    pool.query(query, clave, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  else response.status(404)
}

module.exports = {
  getEvents,
  getDirecciones,
  getDireccionPorClave,
  getTiendaFisica
}
