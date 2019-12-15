const {Pool} = require('pg');


var config = {
    user: 'postgres',
    host: 'localhost',
    database: 'ACAVUCAB',//Aqui va el nombre de la bases de datos
    password: 'admin',
    port: '5432',
  };

  const pool = new Pool(config);


  const getPrueba = async() => {
    try{
      const res = await pool.query('select * from evento');
      console.log(res.rows);
    }catch(err){
      console.log(err);
    }
  };
  getPrueba();

  module.exports= config;
  module.exports= pool;
