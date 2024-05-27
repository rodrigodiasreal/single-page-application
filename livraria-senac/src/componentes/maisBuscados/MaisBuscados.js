import { Card, Container } from "../styles/Container";
import { Titulo, Texto } from "../styles/Textos";
import { Imagem } from "../styles/Imagem";
import React, { useState, useEffect } from 'react';

const MaisBuscados = () => {
    const [livros, setLivros]= useState ([]);
    useEffect(()=>{
        const buscarLivros = async () => {
            try{
                const resposta = await fetch('http://localhost:8080/livros');
                const dados = await resposta.json();
                console.log(dados);
                setLivros(dados);
            }catch (error){
                console.error(error);
            }
        }
        buscarLivros();
    }, [])

    return (
        <Container>
            {
                livros.map ( (livro) => {
                    return (
                        <Card>
                            <Titulo tamanho ="24px" cor="white">{livro.titulo}</Titulo> 
                            <Imagem src={livro.imagem} />
                            <Texto cor="green">{livro.preco}</Texto>
                        </Card>
                    )
                })
            }
        </Container>
    )
}
export default MaisBuscados; 