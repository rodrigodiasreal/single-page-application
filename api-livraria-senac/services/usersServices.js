const fs = require('fs'); //isso permite que possamos ler e/ou escrever no json.

exports.addUser = (name, password)=>{
    //Lemos os dados que estão no json users
    const dadosDoJson = fs.readFileSync('users.jason', 'utf-8');
    //Converte pro formato que queremos trabalhar
    const users = JSON.parse(dadosDoJson);
    //Criamos o novo usuário passando um objeto pra ele com os dados
    //dos parâmetros
    const novoUsuario = {name: name, password: password};
    //Inserimos esse novo usuário dentri da kusta
    users.push(novoUsuario);
    //Escrevemos essa nova lista no nosso json
    fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8')
}

exports.validateLogin = (name, password) => {
    // Criamos uma constante que recebe os dados do json.
    const userData = JSON.parse(fs.readFileSync('users.json', 'utf-8'));
    //Constante que recebe o primeiro valor encontrado com base na regra.
    const user = userData.find(user => user.name === name );

    //Valida o usuário e a senha.
    if(!user || user.password !== password) {
        return false;
    }
}