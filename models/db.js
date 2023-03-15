const { Sequelize } = require('sequelize');

const conexao = new Sequelize("usuario","root","banco123",{
    host: 'localhost',
    dialect:'mysql'
});
conexao.authenticate()
.then(function(){
    console.log("sucesso")
}).catch(function(){
    console.log("erro de conexao")
})

module.exports =  conexao;