const {Pool} = require('pg');
const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'ACAVUCAB',
  password: 'admin',
  port: 5432,
} //PostgreSQL database configuration


const pool = new Pool(config)
pool.connect()
    .then(response => {
        console.log('DB is connected')
    })
    .catch(err => {
        console.log('DB is not connected :c');
        pool.end();
    })

module.exports = pool;




