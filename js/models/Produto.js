
class Produto {
    constructor(obj){
        obj = obj || {};

        this.id = obj.id;
        this.nome = obj.nome;
        this.quantidadeEstoque = obj.quantidadeEstoque;
        this.valor = obj.valor;
    }
}