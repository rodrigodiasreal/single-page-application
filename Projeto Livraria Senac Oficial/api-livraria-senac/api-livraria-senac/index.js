//chamando o pacote que eu instalei para dentro do meu arquivo para poder usarlo

const express = require('express');
const cors = require('cors');
const fs = require('fs');
//importamos os livros que estão nos serviços
const livrosImportado = require('./services/livrosServices');

const livros = fs.readFileSync('livros.json', 'utf-8');

//crio um objeto app para receber todas as funções do express

const app = express();
app.use(cors());

app.get('/livros', (req, res)=>{
    res.status(200).json(livrosImportado.buscarLivros());
});

app.get('/buscarLivroPorTitulo/:titulo', (req, res)=>{
    const {titulo} = req.params;
    const resultado = livrosImportado.buscarPorTitulo(titulo);

    if(resultado){
        res.status(200).send(resultado)
    }else{
        res.status(404).send('recurso não encontrado')
    }
})

app.listen(8080);