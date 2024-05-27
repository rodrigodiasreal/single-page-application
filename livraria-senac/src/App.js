import './App.css';
import { Texto, Titulo } from './componentes/styles/Textos';
import MenuBar from './componentes/navbar/Menu';
import MaisBuscados from './componentes/maisBuscados/MaisBuscados.js';
import Pesquisa from './componentes/pesquisa/Pesquisa.js';
import { Routes } from 'react-router-dom';

function App() {
  return (

    <div className="App">
    <MenuBar/>
    <Routes>
      <Routes path='/' element={
        <>
        <header className="App-header">
        <Pesquisa/>
      </header>
        <MaisBuscados />
        </>
      } />
      <Route path= '/cadastro' element = {<Cadastro />} />
    </Routes>
    
    </div>

  );
}

export default App;
