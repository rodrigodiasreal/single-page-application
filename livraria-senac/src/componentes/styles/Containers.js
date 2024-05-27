import styled from "styled-components";

export const Menu = styled.nav`
display: flex;
height: 50px;
background-color: white;
align-items: center;
justify-content: space-around;
`;

export const Container = styled.div`
display: flex;
flex-direction: ${props => props.direcao || 'row'};
justify-content: center;
gap: 24px;
align-items: center;
`;

export const Card = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`;