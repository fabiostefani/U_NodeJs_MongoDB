var mysql = require('mysql');

var connMySql = function()
{    
    return mysql.createConnection({
         host: process.env.HOST_DB,
         user: process.env.USER_DB,
         password: process.env.PASSWORD_DB,
         database: process.env.DATA_BASE
    });
}

module.exports = function () {
    return connMySql;
}