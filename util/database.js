const mysql = require('mysql2');

const DBlocal = {
    host: 'localhost',
    user: 'root',
    database: 'catalogo1',
    password: '',
};

const pool = mysql.createPool(DBinstancia);

module.exports = pool.promise();