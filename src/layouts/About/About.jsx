import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="sobre-mi" className="containerAbout">
        <div className="about">
            <h2 className="about__title" data-aos="fade-up">Sobre mí</h2>
            <p className="about__text" data-aos="fade-up">
                Mi camino comienza con el diseño web, especializándome en WordPress como freelance, pasando por 3 Agencias de Marketing y Estudios Creativos.
                <br/>
                <br/>
                Me propuse consolidar mis skills como programador con el fin de afrontar desafíos que realmente me inspirasen, desarrollando productos y experiencias digitales con tecnologías más modernas (pasando de WordPress/PHP a Headless WP con React y proyectos Full Stack JavaScript).
                <br/>
                <br/>
                Luego de un tiempo desarrollando muchas cosas como freelance (plantillas de correo con HTML y CSS, webs desde cero, plugins y temas para WordPress, etcétera), me encontré con <a href='https://sensecontents.com/' target='blank' rel='noreferer'>Sense Contents</a>, empresa en la cual trabajo actualmente como Desarrollador Web y en la que he podido crear plataformas para proyectos en distintas áreas, siendo mi favorita la Divulgación Científica, creando webs como <a href='https://nucleomilenioeris.cl/' target='blank' rel='noreferer'>Nucleo Milenio ERIS</a> y <a href='https://genuniversal.cl/' target='blank' rel='noreferer'>Gen Universal</a>.
                <br/>
                <br/>
                😍 ¡Me encanta lo que hago! 😍 Me divierto desarrollando soluciones creativas para las empresas, diseñando experiencias digitales y compartiendo mi conocimiento mediante asesorías, artículos y contenido en RRSS.
            </p>
        </div>
    </div>
  )
}

export default About