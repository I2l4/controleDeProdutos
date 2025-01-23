const express = require('express');
const cors = require('cors');
const Produto = require('./src/model/Produto');

const app = express();
app.use(cors());
app.use(express.json());

const servicoProduto = require('./src/service/servicoProduto');

app.get('/', (req, res) => {
    // throw new Error("Deu ruim no servidor");
    res.send("Api em funcionamento !");
});

app.get('/produtos', (req, res) => {

    var  listaDeProdutos = servicoProduto.obterTodos();
    res.json(listaDeProdutos);
});

app.post('/produtos', (req, res) => {
 
    var produto = servicoProduto.cadastrar(req.body)
    res.json(produto);
});

app.put('/produtos/:id', (req, res) => {
    // Aqui vamos cadastrar o produto
    var id = req.params.id;
    var produto = req.body;

    produto.id = parseInt(id);
    
    servicoProduto.atualizar(produto);

    res.json(produto);
});

app.delete('/produtos/:id', (req, res) => {
    // Aqui vamos cadastrar o produto
    var id = req.params.id;
    servicoProduto.deletar(id);
    res.json({mensagem:`Produto com id ${id} foi deletado com sucesso!`});
});

app.listen(3000, () => console.log("Api rodando na porta 3000"));