import React from 'react';
import LogoPage from '../../assets/shopify-dev-logo-dark.svg';
import '../style/menuStyle.css';

function Menu(){
    return (
      <nav className="menu-container">
        <div className="menu-left">
          <div className="menu-logo-container">
            <img src={LogoPage} alt="LogoPagina" />
          </div>
          <ul>
            <li>Solution</li>
            <li>Blog</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div className="menu-right">
            <input type="search" />
            <ul>
                <li>Log in</li>
                <li>Sing up</li>
            </ul>
        </div>
      </nav>
    );
}

export default Menu;