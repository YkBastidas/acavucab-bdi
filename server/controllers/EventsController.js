var postgre = require('pg');

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {

  getEvents: function(req, res) {
    console.log(req.body);

    var config = require('.././database/config');
    var db = new postgre.Client(config);
    db.connect();

    const text = 'SELECT * FROM evento ORDER BY fecha_inicio DESC';
    db.query(text, (err, res) => {
      if (error) {
        throw error
      }
      db.end();
    });
    return res.status(200).json(results.rows)
  },

};
