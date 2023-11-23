
import './App.css';
import MeowCounterLogo from './imagenes/meow-counter.png';
import Boton from './components/Boton';

function App() {

  const clickBehavior = () => {
    console.log('click');
  }

  const reiniciarContador = () => {
    console.log('reiniciar');
  }

  return (
    <div className='App'>
      <div className='meow-logo-contenedor'>
        <img
        className='meow-logo'
        alt='cat-logo'
        src= {MeowCounterLogo} />
      </div>
      <div className='contenedor-principal-contador'>
        <Boton
          texto='click'
          clickBoton={true}
          clickManagement= {clickBehavior}
        />
        <Boton
          texto='reset'
          clickBoton={false}
          clickManagement={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
