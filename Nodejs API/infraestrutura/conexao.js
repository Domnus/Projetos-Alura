const mariadb = require('mariadb')

const conexao = mariadb.createPool({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'agenda_petshop'
})

module.exports = conexao