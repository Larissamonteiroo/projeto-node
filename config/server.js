var express = require('express')
var app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')
/*
app.get('/', function(req,res){
res.send('../views/home/index')
})

app.get('/front-end', function(req,res){
res.render('../views/secao/frontend')
})

app.get('/back-end', function(req,res){
res.render('secao/back-end')
})

app.get('/infraestrutura', function(req,res){
res.render('secao/infraestrutura')

})
app.listen(3000, function(){
console.log("Servidor rodando com Express")
})*/

module.exports = app;