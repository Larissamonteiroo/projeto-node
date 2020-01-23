var db = require('../../config/dbConnection')

module.exports = function(app){
    app.get('/backend', function(req,res){
        //var connection = db();
        var connection = app.config.dbConnection();
        connection.query("SELECT * FROM conteudo WHERE modulo = 'back-end' ", function(error, result){
            res.render('secao/backend', {dados:result});
        })
    })
}
