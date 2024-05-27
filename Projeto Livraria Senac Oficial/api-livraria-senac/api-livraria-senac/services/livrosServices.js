//biblioteca para ler arquivos
const fs =require('fs');

//crio uma constante que recebe todos os livros do arquivo livros.json
const meuLivro = fs.readFileSync('livros.json', 'utf-8');

exports.buscarLivros = () =>{
    return JSON.parse(meuLivro);
}

exports.buscarPorTitulo = (titulo) => {
    const livros =JSON.parse(meuLivro);
    return livros.find(livro => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));
    
}