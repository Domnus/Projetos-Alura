const Modelo = require('./ModeloTabelaFornecedor')

module.exports = {
    listar () {
        return Modelo.findAll()
    },

    inserir(Fornecedor) {
        return Modelo.create(Fornecedor)
    }
}