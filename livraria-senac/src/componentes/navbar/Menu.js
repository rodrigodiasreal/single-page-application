import { Menu } from "../styles/Containers";
import styled from "styled-components";
import logo from '../images/logo.jpeg'

const lista = ['Lançamentos', 'Blog', 'Fale Conosco'];

const ImagemLogo = styled.img`
width: 96px;
height: auto;
`


function MenuBar(){
    return <Menu>
        <ImagemLogo src={logo} />
    </Menu>
}

export default MenuBar;