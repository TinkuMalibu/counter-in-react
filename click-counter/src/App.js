
import './App.css';
import MeowCounterLogo from './imagenes/meow-counter.png';

function App() {
  return (
    <div className='App'>
      <div className='meow-logo-contenedor'>
        <img
        className='meow-logo'
        alt='cat-logo'
        src= {MeowCounterLogo} />
      </div>
      <div className='contenedor-principal-contador'>
        
      </div>
    </div>
  );
}

export default App;
