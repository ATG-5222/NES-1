const mysql = require('mysql2');

const database = {
    host: 'localhost',
    user: 'root',
    database: 'catalogo1',
    password: 'Azulpera3306',
};

const pool = mysql.createPool(database);

module.exports = pool.promise();