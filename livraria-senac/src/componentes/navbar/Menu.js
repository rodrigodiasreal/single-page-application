import { Menu } from "../styles/Containers";
import styled from "styled-components";
import { Lista } from "../styles/Listas";
import { Item } from "../styles/Listas";

const lista = ['Lançamentos', 'Blog', 'Fale Conosco'];

const ImagemLogo = styled.img`
width: 96px;
height: 50px;
`


function MenuBar(){
    return <Menu>
        <ImagemLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Senac_logo.svg/1200px-Senac_logo.svg.png"/>
        <Lista>
        {
            lista.map((item)=>{ <Item>{item}</Item>})
        }
        <Item>
            <Link to="/cadastro"></Link>
        </Item>
    </Lista>
</Menu>
}

export default MenuBar;