const conexao = require('../infraestrutura/conexao')
const uploadDeArquivo = require('../arquivos/uploadDeArquivos')

class Pet {
	adiciona(pet, res) {
		uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {

			if (erro) {
				res.status(400).json({erro})
			} else {

				const novoPet = {
					nome: pet.nome, 
					imagem: novoCaminho
				}

				conexao.query('INSERT INTO Pets (nome, imagem) values (?,?)', [novoPet.nome, novoPet.imagem]).then(
					(resultados) => {
						console.log(resultados)
						res.status(200).json(novoPet)
					}).catch(err => {
						console.log(err), 
						res.status(400).json(erro)
					})
			}	
		})
	}
}

module.exports = new Pet()