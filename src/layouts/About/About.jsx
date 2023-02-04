import React from 'react';
import './About.css';
import perfect from '../../img/perfect.png';
import fernando from '../../img/fernando.jpg';

const About = () => {
  return (
    <div id="sobre-mi" className="containerAbout">
        <div className="about">
            <div className="about__content">
              {/* <div className="about-img">
                  <img src={fernando} alt="perfect"/>
              </div> */}
              <div className="wraper">
                <h2 className="about__title" data-aos="fade-up">Sobre mí 🏋️‍♂️</h2>
                <p className="about__text" data-aos="fade-up">
                    Soy un <strong>desarrollador de software</strong> enfocado en tecnologías web. 
                    <br/>
                    <br/>
                    Suelo programar tanto del lado del cliente como del servidor, sin embargo, me especializo en Frontend para tener un <strong>contacto más directo con los usuarios</strong> y complementar mis skills técnicas con <strong>Diseño UX.</strong>  
                    <br/>
                    <br/>
                    Actualmente estoy enfocado en <strong>React</strong> y en paralelo experimento con tecnologías para desarrollar sitios web inmersivos (Blender, Three.js, etcétera).
                    <br/>
                    <br/>
                    Me divierto creando productos y experiencias digitales desde cero en torno a temas que me apasionan y disfruto compartiendo mi conocimiento mediante <strong>asesorías, artículos y contenido en redes sociales.</strong>  
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About