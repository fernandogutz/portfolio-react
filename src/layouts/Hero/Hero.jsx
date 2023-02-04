import React from 'react';
import fernando from '../../img/fernando.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <div id="inicio" className="container containerHero">
            <div className="hero">
                <section className="hero__info">
                    <p className="hero__subtitle hero__subtitle--prev"> <span id="heroHand" className="hero__hand">👋</span>  ¡Hola! Soy Fernando</p>
                    <h1 className="hero__title">Full Stack <span>Developer</span></h1>
                    {/*  <p className="hero__subtitle">Enfocado en la creación de productos y experiencias digitales para proyectos que me inspiran.</p>*/}
                    <div className="hero__buttons">
                        <a className="hero__btn btn-primary" href="#proyectos">Ver Proyectos</a>
                        <a className="hero__btn btn-secondary hero__btn--contact" href="#contacto">Contacto</a>
                    </div>
                </section>
                <div className="hero__img">
                    <img src={fernando} alt="Fernando Gutiérrez"/>
                </div>
            </div>
        </div>
    )
}

export default Hero