import React from 'react';
import '../stylesheets/boton.css';
import kittyMeow from '../sounds/kittyMeow.wav'


function Boton({texto, clickBoton, clickManagement, buttonType}) {

  const playSound = () =>{
    if (buttonType === 'click') {
    const audio = new Audio(kittyMeow);
    audio.play();
  };
}

  return (
    <button
      className={ clickBoton ? 'boton-click btn btn-primary btn-lg col-6': 'boton-reset btn btn-success btn-lg col-6' }
      onClick={() => {
        clickManagement();
        playSound(); // Call playSound when the button is clicked
      }}>
      {texto}
    </button>
  );
}
export default Boton;
