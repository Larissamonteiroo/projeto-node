var mysql = require('mysql');
//colocar a função numa variável
var connMySQL = function(){
    console.log('Conexao com o bd foi estabelecida');
    return mysql.createConnection({
    host: 'localhost',
    user: 'projeto',
    password: '1234',
    database: 'projeto_node'
});
};
//exportar a variável (não mais a função de conexão)
module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com o bd');
    return connMySQL;  
};