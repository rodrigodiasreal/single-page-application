import styled from "styled-components";

export const Titulo = styled.h1`
font-size: ${props => props.tamanho || '32px'};
color: ${props => props.cor || 'black'};
line-height: 1.5rem;
`;