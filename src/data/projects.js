import fernandoGutzImg from '../img/proyectos/fernandogutz.png';
import pomotaskImg from '../img/proyectos/pomotask.png';
import beDigitalImg from '../img/proyectos/beDigital.png';
import delegaImg from '../img/proyectos/delega.png';
import godkoutImg from '../img/proyectos/godkout.jpg';
import innovaImg from '../img/proyectos/innova-dental.jpg';

const listProjects = [
    
    {
        "tag": "Proyecto personal",
        "urlImg": godkoutImg,
        "altImg": "Godkout Web",
        "title": "Godkout.com",
        "description": "Me apasiona el deporte desde que tengo memoria. Este sitio web es la base sobre la cual construyo y documento los distintos proyectos vinculados al entrenamiento físico.",
        "tech": "HTML5 - CSS3 - WordPress - WooCommerce - Elementor",
        "textBtn": "Visitar sitio",
        "urlBtn": "https://godkout.com/"
    },
    
    {
        "tag": "Proyecto personal",
        "urlImg": pomotaskImg,
        "altImg": "Proyecto App Pomotask",
        "title": "Pomotask App",
        "description": "Sí, lo sé, otro trillado gestor de tareas, sin embargo, quise ir un poco más allá del CRUD básico, integrando un temporizador Pomodoro y un Login de usuarios. Este proyecto me ayudó a pulir mis skills con JavaScript (manipulación del DOM, Interval Timer, JS asíncrono) y me dió mucha soltura en el back (PHP orientado a objetos, consultas SQL, seguridad de datos, cifrado de información, etcétera).",
        "tech": "HTML5 - CSS3 - Bootstrap - JavaScript - jQuery - AJAX - PHP - MySQL",
        "textBtn": "Visitar sitio",
        "urlBtn": "https://pomotask.bedigital.cl/"
    },
    
    {
        "tag": "Proyecto personal",
        "urlImg": fernandoGutzImg,
        "altImg": "Portfolio personal con React.js",
        "title": "Fernandogutz.com",
        "description": "Sitio web personal desarrollado con React.js. Es la nueva versión de mi portfolio (anteriormente full WordPress). He incorporado un blog que lo alimento con la API REST de WP para usarlo como Headless CMS, me gusta usar este espacio para escribir sobre distintos temas de mi interés.",
        "tech": "HTML5 - CSS3 - JavaScript - React.js - Git",
        "textBtn": "Ir a GitHub",
        "urlBtn": "https://github.com/fernandogutz/portfolio-react"
    },

    {
        "tag": "Cliente",
        "urlImg": delegaImg,
        "altImg": "Theme WordPress a medida Delega.cl",
        "title": "Delega Theme WP",
        "description": "En mi época de Freelance tuve la oportunidad de trabajar con increíbles personas y sus empresas, entre todos ellos destaco Delega, un sitio web implementado en WordPress a través de un Child Theme maquetado desde cero (HTML y CSS). Con este proyecto logré adentrarme bastante en el core de WP, formando misbases para seguir desarrollando temas y plugins a medida con PHP.",
        "tech": "HTML5 - CSS3 - JavaScript - jQuery - PHP - WordPress - WooCommerce",
        "textBtn": "Visitar sitio",
        "urlBtn": "https://delega.cl/"
    },

    {
        "tag": "Cliente",
        "urlImg": innovaImg,
        "altImg": "Innova Dental web Clínica",
        "title": "Innova Dental",
        "description": "Sitio web desarrollado para Clínica Innova Dental ubicada en Concepción. Decidí trabajarla como una Landing Page cuyo objetivo principal es conseguir Reservas de Hora mediante un formulario implementado en el mismo sitio web.",
        "tech": "HTML5 - CSS3 - WordPress - Elementor",
        "textBtn": "Visitar sitio",
        "urlBtn": "https://innova-dental.cl/"
    },

    {
        "tag": "Emprendimiento",
        "urlImg": beDigitalImg,
        "altImg": "Be Digital Studio",
        "title": "Be Digital",
        "description": "Be Digital es un estudio descentralizado que se especializa en la creación de productos y experiencias digitales. El sitio fue diseñado con Elementor para reducir el tiempo de desarrollo y la complejidad técnica, centrando los esfuerzos en optimizar las interfaces a nivel de UX/UI.",
        "tech": "HTML5 - CSS3 - WordPress - Elementor",
        "textBtn": "Visitar sitio",
        "urlBtn": "https://bedigital.cl/"
    }

]

export {
    listProjects
}