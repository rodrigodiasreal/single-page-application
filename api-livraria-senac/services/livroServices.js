//Biblioteca para ler arquivos
const fs = require('fs');

//Crio uma constante que recebe todos os livros do arquivo livros.json
const meuLivros = fs.readFileSync('livros.json', 'utf-8');

//Criamos uma função que retorna os livros contidos na constante
//meus livros e exporto para que ela fique disponível no projeto

exports.buscarLivros = () => {
    return JSON.parse(meuLivros);
}

exports.buscarPorTitulo = (titulo) => {
    const livros = JSON.parse(meuLivros);
    return livros.find(livro => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));
}