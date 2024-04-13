import React, { useState } from "react";
import Cared_down from "./icons/cared_down";
import "./style/DropdownMenu.css";

function DropdownMenu({menuName, subMenuItems}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="dropdown-menu" onBlur={handleCloseMenu}>
      <button
        onClick={handleToggleMenu}
        className={`toggle-button ${isMenuOpen ? "is-open" : ""}`}
      >
        {isMenuOpen ? `${menuName}` : `${menuName}`}
        <Cared_down />
      </button>
      {isMenuOpen && (
        <ul className="menu-items">
          {subMenuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
