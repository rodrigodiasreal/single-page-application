import styled from "styled-components";

export const Subtitulos =styled.h2`
font-size: ${props => props.fonte || '12px'};
color: ${props => props.cor || 'blue'};
line-height: 0.5rem
`;