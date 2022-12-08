import React from 'react';
import './Tech.css';
import perfect from '../../img/perfect.png'

const Tech = () => {
  return (
        <div id="tecnologias" className="containerTechnologies">
            <div className="technologies" data-aos="fade-up">
                <h2 className="technologies__title">Tecnologías 💻</h2>
                <div className="technologies__content">
                    <div className="tech-list">
                        <h4 className="tech__title">💙 JavaScript: React.js - jQuery - Frontity - EcmaScript6+</h4>
                        <h4 className="tech__title">💙 Backend: PHP8 - MySQL - WordPress - WooCommerce</h4>
                        <h4 className="tech__title">💙 Maquetación: HTML5 - CSS3 - Sass - Bootstrap</h4>
                        <h4 className="tech__title">💙 Design: Figma - Inkscape - Pixlr - Elementor</h4>
                    </div>
                    <div className="tech-img">
                        <img src={perfect} alt="perfect"/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Tech