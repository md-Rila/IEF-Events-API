const mysql = require('mysql');
//const { contentType } = require('express/lib/response');

var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'events_ief',
    multipleStatements: true
});


module.exports = connect;