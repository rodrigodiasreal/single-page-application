import styled from "styled-components";

export const Titulo = styled.h1`
font-size: ${props => props.tamanho || '32px'};
color: ${props => props.cor || 'black'};
line-height: 1.5rem;
`;

export const Input = styled.input `
width: 600px;
height: 30px
border-radius: 5px
border: 1px solid black;
padding: 8px;
background-color: #fff;
`;