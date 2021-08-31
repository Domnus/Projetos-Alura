class Tabelas {
	init(conexao) {
		this.conexao = conexao
		this.criarAtendimentos()
		this.criarPets()
	}

	criarAtendimentos() {
		this.conexao.query('CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(11) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, data DATETIME NOT NULL, dataCriacao DATETIME NOT NULL, PRIMARY KEY (id))').then(() => {
			console.log('Tabela atendimentos criada com sucesso')
		}).catch(err => {
			console.log(err)
		})
		/*
		const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY (id))'

		this.conexao.query(sql, erro => {
			if(erro) {
				console.log(erro)
			} else {
				console.log('Tabela atendimentos criada com sucesso')
			}
		})
		*/
	}

	criarPets() {
		this.conexao.query('CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome varchar(51), imagem varchar(200), PRIMARY KEY (id))').then(() => {
			console.log('Tabela Pets criada com sucesso')
		}).catch(err => {
			console.log(err)
		})

		/*
		const sql = 'CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(200), PRIMARY KEY (id))'
		this.conexao.query(sql, erro => {
			if(erro) {
				console.log(erro)
			} else {
				console.log('Tabela Pet criada com sucesso')
			}
		})
		*/
	}
}

module.exports = new Tabelas