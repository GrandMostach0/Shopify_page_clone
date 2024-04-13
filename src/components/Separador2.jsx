import React from 'react'
import './style/containerS.css'
import LogoMattel from '../assets/Sponsors/LogoMattel.svg';
import LogoGlossier from '../assets/Sponsors/LogoGlossier.svg';
import LogoStaples from '../assets/Sponsors/LogoStaples.svg';
import LogoCoty from '../assets/Sponsors/LogoCoty.svg';

function Separador2() {
  return (
    <div className="containerS">
      <div className="container-images">
        <img src={LogoMattel} alt="" />
        <p>imagen</p>
        <img src={LogoGlossier} alt="" />
        <p>imagen</p>
        <img src={LogoStaples} alt="" />
        <img src={LogoCoty} alt="" />
        <p>imagen</p>
      </div>
    </div>
  );
}

export default Separador2