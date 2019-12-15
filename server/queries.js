
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

module.exports = {
  getEvents,
}
