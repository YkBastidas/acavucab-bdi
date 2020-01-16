var LocalStrategy = require('passport-local').Strategy
var postgre = require('pg')
var bcrypt = require('bcryptjs')
const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'ACAVUCAB',
  password: 'admin',
  port: 5432,
} //PostgreSQL database configuration
const axios = require('axios');
const Pool = require('pg').Pool
const pool = new Pool(config)

module.exports = function (passport) {

	passport.serializeUser(function(user,done) {
        console.log('serializeUser callback. User id se guarda en cookie session aqui')
        console.log (`id del user dentro del serialize ${user.id}`)
		done(null,user.id);
	});

  passport.deserializeUser((id, done) => {
    axios.get('http://localhost:3000/read/usuarioPorID',{
            params:{primaryKey: id}
          })
    .then(res => done(null, res.data) )
    .catch(error => done(error, false))
  });

	passport.use(new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
		passReqToCallback: true
	}, function(req,username,password,donepass){
        pool.on('error', (err, client) => {
            console.error('Unexpected error on idle client', err)
            process.exit(-1)})
        console.log('Estoy en localstrategy')
        console.log('username', username)
        console.log('password', password)
        pool.connect((err, client, done) => {
            if (err) throw err
            client.query('SELECT * FROM usuario WHERE nombre = $1',[username], (err, res) => {
           //  done()
              if (err) {
                console.log(err.stack)
              } else {
                if (res.rows.length>0){
                    var user = res.rows[0];

                    if (password === user.contrasena){
                        console.log(user);
                        return donepass (null,user);
                    }else{
                        console.log('contraseña invalida');
                        return donepass(null,null);
                    }

                }else {
                    console.log('usuario no valido');
                    return donepass(null,null);
                }
                done();

              }
            })
          })
		return
  }))
}
