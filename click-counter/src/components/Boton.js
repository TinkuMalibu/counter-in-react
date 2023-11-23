import React from 'react';
import '../stylesheets/boton.css';


function Boton({texto, clickBoton, clickManagement}) {
  return (
    <button
      className={ clickBoton ? 'boton-click btn btn-primary btn-lg': 'boton-reset btn btn-success btn-lg' }
      onClick={clickManagement}>
      {texto}
    </button>
  );
}
export default Boton;
