import { Button, Typography } from "@mui/material";
import './AppBar.css';

function AppBar(){
    return(
        <>
        <toolbar className="toolBar">
        <img src="./img/logo-oficial.png"/>
      
        <div className="navLinks">
            <Typography className ="link" href="">Entregador</Typography>
            <Typography className ="link" href="">Restaurante e Mercado</Typography>
            <Typography className ="link" href="">Carreiras </Typography>
            <Typography className ="link"href="">Ifood Card</Typography>
            </div>
            <div className ="btn">
                <Typography href="">criar conta </Typography>
           <Button className="btn_red">Entrar</Button>
           </div >  
        
        </toolbar>  
          </>
    );
}

export default AppBar;