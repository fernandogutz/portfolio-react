import React from 'react'
import './Header.css';

import logo from '../../img/logo.png';

const Header = () => {

  const toggleMenu = () => {
    
  }


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
              <label onClick={toggleMenu} htmlFor="checkMenu" id="xMenu" className="header__btn">
                  Cerrar <i className="fa-solid fa-xmark"></i>
              </label>
              <a href="https://blog.fernandogutz.com/" target='__blank'>Blog <i class="fa fa-external-link" aria-hidden="true"></i></a>
              <a href="#sobre-mi">Sobre mí</a>
              <a href="#tecnologias">Skills</a>
              <a href="#proyectos">Portfolio</a>
              <a href="#contacto">Contacto</a>
              {/* <a href="https://drive.google.com/file/d/1BTIIF6HUJf3axr3C7cM61h15AtSk3P3z/view?usp=sharing" target='blank'>CV</a> */}
          </nav>
      </header>
    </div>
  )
}

export default Header