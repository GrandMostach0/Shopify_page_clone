import React from 'react';
import LogoPage from '../../assets/shopify-dev-logo-dark.svg';
import DropdownMenu from '../DropdownMenu';
import Cared_down from '../icons/cared_down';
import '../style/menuStyle.css';

const subMenuSolutions = [
  "Build and customize your Store",
  "Develop for the Shopify App Store",
  "Design for the Shopify Theme Store"
];

const subMenuDocumentations = [
  "Apps",
  "Theme",
  "Custom storefronts",
  "Marketplace",
  "APIs and references",
  "View All"
];

function Menu(){
    return (
      <nav className="menu-container">
        <div className="menu-left">
          <div className="menu-logo-container">
            <img src={LogoPage} alt="LogoPagina" />
          </div>
          <ul>
            <li className='dropMenus'>
              <DropdownMenu
                menuName="Solutions"
                subMenuItems={subMenuSolutions}
              />
              
            </li>
            <li>Blog</li>
            <li className='dropMenus'>
              <DropdownMenu
                menuName="Documentations"
                subMenuItems={subMenuDocumentations}
              />
            </li>
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