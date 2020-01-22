var db = require('../../config/dbConnection')

module.exports = function(app){
    app.get('/', function(req,res){
        var connection = db();
        connection.query("SELECT * FROM conteudo", function(error, result){
            res.send(result);
        })
        //res.render('secao/frontend')
    })
}
