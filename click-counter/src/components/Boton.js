import React from 'react';
import '../stylesheets/boton.css';


function Boton({texto, clickBoton, clickManagement}) {
  return (
    <button
      className={ clickBoton ? 'boton-click btn btn-primary btn-lg col-6': 'boton-reset btn btn-success btn-lg col-6' }
      onClick={clickManagement}>
      {texto}
    </button>
  );
}
export default Boton;
