import './App.css';
import { Titulo } from './componentes/styles/Textos.js';
import { Subtitulos } from './componentes/styles/Subtitulo';
import MenuBar from './componentes/navbar/Menu';

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <header className="App-header">
        <Titulo cor ='purple'>Aula de Single Page</Titulo>
        <Subtitulos cor = 'green'>Subtitulo React</Subtitulos>
        
        
      </header>
    </div>
  );
}

export default App;
