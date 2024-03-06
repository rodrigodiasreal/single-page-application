import { Button, Typography } from "@mui/material";
import './Header.css';

function Header(){
    return(
        <>
        
        <div className="header__menu">
            <h1> Faça mercado no Ifood</h1>
            <p>Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</p>
            <input type="search" placeholder="Em qual endereço você está?"></input>
            <Button className="btn_red">Entrar</Button>
        </div>
        <div>
        <div className="navLinks">
            <Typography className ="link" href="">Frios</Typography>
            <Typography className ="link" href="">Laticínios</Typography>
            <Typography className ="link" href="">Feira </Typography>
            <Typography className ="link"href="">Bebidas</Typography>
            <Typography className ="link" href="">Doces</Typography>
            <Typography className ="link" href="">Massas Frescas</Typography>
            <Typography className ="link" href="">Limpeza </Typography>
            <Typography className ="link"href="">Padaria</Typography>
            <Typography className ="link" href="">Higiene</Typography>
            <Typography className ="link" href="">Congelados</Typography>
            <Typography className ="link" href="">Carnes </Typography>
            <Typography className ="link"href="">Cerveja</Typography>
            </div>
        </div>
        
        </>
    )
}

export default Header;