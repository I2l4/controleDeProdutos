const Produto = require('../model/Produto');
var idAtual = 1;

var listaDeProdutos = [
    new Produto({
        id:1,
        nome:"Sapato",
        quantidadeEstoque: 10,
        valor: 200.0
    })
];

function obterTodos(){
    return listaDeProdutos;
}

function cadastrar(obj){
    var produto = new Produto(obj);
    idAtual++;
    produto.id = idAtual;
    listaDeProdutos.push(produto);

    return produto;
}

function atualizar(produto){
    var indice = listaDeProdutos.findIndex(p => p.id == produto.id);
    
    if(indice < 0){
        return;
    }

    listaDeProdutos.splice(indice, 1, produto);
}

function deletar(id){
    var indice = listaDeProdutos.findIndex(p => p.id == id);
    if(indice < 0){
        return;
    }

    // Deleta de dentro do array a posicição especifica
    listaDeProdutos.splice(indice, 1);
}


module.exports = {
    obterTodos,
    cadastrar,
    atualizar,
    deletar
}