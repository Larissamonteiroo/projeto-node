var db = require('../../config/dbConnection')

module.exports = function(app){
    app.get('/infraestrutura', function(req,res){
        //var connection = db();
        var connection = app.config.dbConnection();
        connection.query("SELECT * FROM conteudo WHERE modulo = 'infraestrutura' ", function(error, result){
            res.render('secao/infraestrutura', {dados:result});
        })
    })
}
