const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Atendimento {
	adiciona(atendimento, res) {
		const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
		const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

		const dataValida = moment(data).isSameOrAfter(dataCriacao)
		const clienteValido = atendimento.cliente.length >= 5

		const validacoes = [
			{
				nome: 'data',
				valido: dataValida,
				mensagem: 'Data deve ser maior ou igual à atual'
			},
			{
				nome: 'cliente',
				valido: clienteValido,
				mensagem: 'Cliente deve ter pelo menos 5 caracteres'
			}
		]

		const erros = validacoes.filter(campo => !campo.valido)
		const existemErros = erros.length

		if (existemErros) {
			res.status(400).json(erros)
		} else {

			const atendimentoDatado = {...atendimento, data, dataCriacao}
			conexao.query("INSERT INTO Atendimentos (cliente, pet, servico, status, observacoes, data, dataCriacao) values (?,?,?,?,?,?,?)",[atendimentoDatado.cliente, atendimentoDatado.pet, atendimentoDatado.servico, atendimentoDatado.status, atendimentoDatado.observacoes, atendimentoDatado.data, atendimentoDatado.dataCriacao])
				.then(
					(resultados) =>{
						res.status(201).json(atendimento)
				})
				.catch(err => {
					res.status(400).json(err)
				})
		}
	}

	lista(res) {
		conexao.query('SELECT * FROM Atendimentos')
			.then(
				(resultados) => {
					res.status(200).json(resultados)
				}
			).catch(err => {
				res.status(400).json(err)
			})
	}

	buscaPorId(id, res) {
		conexao.query('SELECT * FROM Atendimentos WHERE id = (?)', [id])
			.then(
				(resultados) => {
					const atendimento = resultados[0]
					res.status(200).json(atendimento)
				}
			).catch(err => {
				res.status(400).json(err)
			})
	}

	altera(id, valores, res) {
		if (valores.data) {
			valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
		}

		var keys = Object.keys(valores)
		conexao.query('UPDATE Atendimentos SET cliente = ?, pet = ?, servico = ?, status = ?, observacoes = ?, data = ? WHERE id = ?', [valores.cliente,valores.pet,valores.servico,valores.status,valores.observacoes,valores.data, id])
			.then(
				(resultados) => {
					res.status(200).json({...valores, id})
				}
			).catch(err => {
				res.status(400).json(err)
				console.log(err)
			})
	}

	deleta(id, res) {
		const sql = 'DELETE FROM Atendimentos WHERE id = ?'

		conexao.query(sql, id)
			.then(
				(resultados) => {
					res.status(200).json({id})
				}
			).catch(err => {
				res.status(400).json(err)
			})
	}
}

module.exports = new Atendimento