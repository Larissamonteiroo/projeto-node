var mysql = require('mysql');

module.exports = function(app){
    return mysql.createConnection({
        host: 'localhost',
        user: 'projeto',
        password: '1234',
        database: 'projeto_node'
    });
};