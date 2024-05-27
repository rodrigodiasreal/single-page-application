//chamando o pacote que eu instalei para dentro do meu arquivo para poder usa-lo

const express = require('express');
//Importamos os livros que estão nos serviços
const livrosImportados = require('./services/livrosServices')
const userService = require('./services/usersServices');
const body = require('body-parser');
const cors = require('cors');

//Crio um objeto app para receber todas as
const app = express();
app.use(cors());

app.get('/livros', (req, res)=>{
    res.status(200).json(JSON.livrosImportados.buscarLivros());
});

app.get`/buscarLivroPorTitulo/:titulo`, (req, res)=>{
    //extrair o título que é enviado na url pelo cliente
    const {titulo} = req.params;
    //chamo a função do service e passo o título extraído
    const resultado = livrosImportados.buscaPorTitulo(titulo);

    if(resultado){
        res.status(200).send(resultado)
    } else {
        res.status(404).send('recurso não encontrado');
    }
}

app.post('/addUser', (req,res) =>{
    //extrair os dados do corpo da requisição
    const {name, password} = req.body;
    if(name && password){
        userService.addUser(name, password);
        res.status(200).send("User add");
    } else {
        res.status(400).send('Dados inválidos')
    }

})

//rota de login
app.post('/login', async (req,res)=> {
    //Extração das variáveis que estão sendo passadas
    const {name, password} = req.body;

    const resul = await userService.validateLogin(name, password);

    if(resul){
        res.status(200).json('ok')
    } else {
        res.status(401).json('Dados incorretos')
    }
})

app.listen(8080);