import React, { useState } from 'react';
import logo from "../assets/Logo-menu.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; 

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return <nav className="menu">
    <a href="#home" className="logo">
      <img src={logo} alt='Logo' />
    </a>

    <FontAwesomeIcon icon={faBars} style={{color: "#f8f7f7",}} className='menu-icon' onClick={toggleMenu} />

    <ul className={`menu-links ${menuOpen ? 'open' : ''}`}>
        <a className="items" href="#home">Home</a>
        <a className="items" href="#sobre">Sobre</a>
        <a className="items" href="#contact">Contato</a>
        <a className="items" href="#catalogo">Mural</a>
    </ul> 
  </nav>
}
