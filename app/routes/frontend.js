var db = require('../../config/dbConnection')

module.exports = function(app){
    app.get('/frontend', function(req,res){
        //var connection = db();
        var connection = app.config.dbConnection();
        connection.query("SELECT * FROM conteudo WHERE modulo = 'front-end' ", function(error, result){
            res.render('secao/frontend', {dados:result});
        })
    })
    app.post('/frontend/salvar', function(req,res){
        var dados = req.body;
        var connection = app.config.dbConnection()
        connection.query('INSERT INTO conteudo SET ?', dados, function(error,
        result){
        
        res.redirect('/frontend');
        });
    });
}
