
import './App.css';
import MeowCounterLogo from './imagenes/meow-counter.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState} from 'react';

function App() {

  const [numClics, setNumClics ] = useState(0);

  const clickBehavior = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='meow-logo-contenedor'>
        <img
        className='meow-logo'
        alt='cat-logo'
        src= {MeowCounterLogo} />
      </div>
      <div className='contenedor-principal-contador'>
        <Contador numClics={numClics} />
        <Boton
          texto='click'
          clickBoton={true}
          clickManagement= {clickBehavior} />
        <Boton
          texto='reset'
          clickBoton={false}
          clickManagement={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
