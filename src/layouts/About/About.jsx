import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="sobre-mi" className="containerAbout">
        <div className="about">
            <h2 className="about__title" data-aos="fade-up">Sobre mí</h2>
            <p className="about__text" data-aos="fade-up">
                Soy un desarrollador de software enfocado en tecnologías web. 
                <br/>
                <br/>
                Suelo programar tanto del lado del cliente como del servidor, sin embargo, me especializo en Frontend, ya que me gusta tener un contacto más directo con los usuarios y complementar mis skills técnicas con formación en Diseño UX/UI.  
                <br/>
                <br/>
                Actualmente estoy enfocado en React y en paralelo experimento con tecnologías para desarrollar sitios web inmersivos (Blender, Three.js, etcétera).
                <br/>
                <br/>
                Me divierto creando productos y experiencias digitales desde cero en torno a temas que me apasionan y disfruto compartiendo mi conocimiento mediante asesorías, artículos y contenido en redes sociales.  
            </p>
        </div>
    </div>
  )
}

export default About