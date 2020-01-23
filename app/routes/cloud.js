var db = require('../../config/dbConnection')

module.exports = function(app){
    app.get('/cloud', function(req,res){
        var connection = db();
        connection.query("SELECT * FROM conteudo WHERE modulo = 'cloud' ", function(error, result){
            res.render('secao/cloud', {dados:result});
        })
    })
}
