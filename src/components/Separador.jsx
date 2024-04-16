import React from 'react';
import imagenSeparador from '../assets/images/hero-Desktop-separator1.png';
import FlechaRight from './icons/row_direction_right';
import './style/separador.css';

function Separador() {
  return (
    <div className="separadorContainer">
      <div className="separadorContainerText">
        <div className="textoSeparador">
          <div className="separadorText">
            <h1 className="separador-title">Build any commerce experience</h1>
            <hr />
            <p>
              Compose, customize, and extend every part of the commerce
              stack—from storefront to checkout to backend integrations—and
              create unique experiences for your brand or millions of merchants
              around the world.
            </p>
            <div className="ancors">
              <a href="#">Explore docs</a>
              <FlechaRight />
            </div>
          </div>
          <div className="imagen-container">
            <img className="imagenSeparador" src={imagenSeparador} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Separador;