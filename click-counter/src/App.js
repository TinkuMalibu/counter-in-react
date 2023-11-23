
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
          texto='Meow'
          clickBoton={true}
          clickManagement= {clickBehavior}
          buttonType= 'click' />
        <Boton
          texto='Please stop'
          clickBoton={false}
          clickManagement={reiniciarContador}
          buttonType='reset' />
      </div>
    </div>
  );
}

export default App;
