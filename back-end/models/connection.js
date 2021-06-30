const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'riquee',
    password: 'Somsm123',
    database: 'solucoes'});

module.exports = connection;