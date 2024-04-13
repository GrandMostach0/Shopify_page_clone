import React from 'react';
import imagenSeparador from '../assets/images/hero-Desktop-separator1.png';

function Separador(){
    return (
      <div className="separadorContainer">
        <div className="textoSeparador">
          <h1 className="separador-title">Build any commerce experience</h1>
          <p>
            Compose, customize, and extend every part of the commerce stack—from
            storefront to checkout to backend integrations—and create unique
            experiences for your brand or millions of merchants around the
            world.
          </p>
          <a href="#">Explore docs</a>
        </div>
        <img src={imagenSeparador} alt="" />
      </div>
    );
}

export default Separador;