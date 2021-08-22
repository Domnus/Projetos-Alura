const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Atendimento {
	adiciona(atendimento) {
		const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
		const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
		const atendimentoDatado = {...atendimento, dataCriacao, data}
        conexao.query("INSERT INTO Atendimentos (cliente,pet,servico,status,observacoes, data, dataCriacao) values (?,?,?,?,?,?,?)",[atendimentoDatado.cliente,atendimentoDatado.pet,atendimentoDatado.servico,atendimentoDatado.status,atendimentoDatado.observacoes, atendimentoDatado.data, atendimentoDatado.dataCriacao]).then(
			(resultados) =>{
				console.log(resultados)
			})
			.catch(err => {
				console.log(err)
			})
	}
}

module.exports = new Atendimento