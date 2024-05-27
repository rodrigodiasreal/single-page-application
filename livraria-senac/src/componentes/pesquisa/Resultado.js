import { Card, Container } from "../styles/Container";
import { Titulo, Texto } from "../styles/Textos";
import { Imagem } from "../styles/Imagem";

const Resultado =({livros})=>{
    if(livros.lenght === 0){
        return <p>Nenhum livro encontrado</p>
    }
    return(
        <Container>
            {livros.map((livro)=> {
                return(
                <>
                    <Card >
                        <Titulo>{livro.titulo}</Titulo> 
                        <Texto>{livro.autor}</Texto>
                        <Imagem src={livro.Imagen}/>
                        <h3>{livro.preco}</h3>
                    </Card>
                    
                
                </>
                )
            })}
            </Container>
    )
}

export default Resultado;