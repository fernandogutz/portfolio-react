import React from 'react'
import './Header.css';

import logo from '../../img/logo.png';

const Header = () => {
  return (
    <div className="headerContainer">
      <header className="header">
          <div className="header__logo">
            <a href="#inicio">
              <img src={logo} alt="F de Fernando Gutz"/>
            </a>
          </div>

          <label htmlFor="checkMenu" id="barMenu" className="header__btn">
              Menú <i className="fa-solid fa-bars"></i>
          </label>
          <input type="checkbox" id="checkMenu" name="checkMenu"/>

          <nav className="header__nav" id="navMenu">
              <label htmlFor="checkMenu" id="xMenu" className="header__btn">
                  Cerrar <i className="fa-solid fa-xmark"></i>
              </label>
              <a href="#inicio">Inicio</a>
              <a href="#sobre-mi">Sobre mí</a>
              <a href="#tecnologias">Tecnologías</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#contacto">Contacto</a>
          </nav>
      </header>
    </div>
  )
}

export default Header