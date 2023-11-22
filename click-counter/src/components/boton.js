import React from 'react';


function Boton({texto, clickBoton}) {
  return (
    <buton
      className={clickBoton ? 'boton-click': 'boton-reset'}>
      {texto}
    </buton>
  );
}
