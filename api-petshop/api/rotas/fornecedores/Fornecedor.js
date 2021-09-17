const TabelaFornecedor = require('./TabelaFornecedor')

class Fornecedor {
    constructor({ id, empresa, email, categoria, dataCricao, dataAtualizacao, versao }) {
        this.id              = id
        this.empresa         = empresa
        this.email           = email
        this.categoria       = categoria
        this.dataCricao      = dataCricao
        this.dataAtualizacao = dataAtualizacao
        this.versao          = versao
    }

    async criar() {
       const resultado = await TabelaFornecedor.inserir({
           empresa: this.empresa,
           email: this.email,
           categoria: this.categoria
       }) 

       this.id = resultado.id
       this.dataCricao = resultado.dataCricao
       this.dataAtualizacao = resultado.dataAtualizacao
       this.versao = resultado.versao
    }

    async atualizar () {
        await TabelaFornecedor.pegarPorId(this.id)
        const campos = ['empresa', 'email', 'categoria']
        const dadosParaAtualizar = {}

        campos.forEach((campo) => {
            const valor = this[campo]
            if (typeof valor === 'string' && valor.length > 0) {
                dadosParaAtualizar[campo] = valor
            }
        })

        if (Object.keys(dadosParaAtualizar).length === 0) {
            throw new Error('Não foram fornecidos dados para atualizar!')
        }

        await TabelaFornecedor.atualizar(this.id, dadosParaAtualizar)
    }
}

module.exports = Fornecedor