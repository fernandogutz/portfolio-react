import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contacto" className="containerContact">
        <div className="contact" data-aos="fade-up">
            <h2 className="contact__title">Ponte en contacto</h2>                
            <h5 className="contact__mail"> <a href="mailto:hello@fernandogutz.com">hello@fernandogutz.com</a></h5>
            <div className="contact__rrss">
                <a className="btn-primary" href="https://www.linkedin.com/in/fernandogutzz/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                <a className="btn-primary" href="https://www.instagram.com/fernandogutzz/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a className="btn-primary" href="https://github.com/fernandogutz" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Contact