import fernandoGutzImg from '../img/proyectos/fernandogutz.png';
import pomotaskImg from '../img/proyectos/pomotask.png';
import beDigitalImg from '../img/proyectos/beDigital.png';
import delegaImg from '../img/proyectos/delega.png';

const listProjects = [
    {
        "tag": "Proyecto personal",
        "urlImg": fernandoGutzImg,
        "altImg": "Portfolio personal con React.js",
        "title": "Fernandogutz.com",
        "description": "Sitio web personal desarrollado con React.js. Es la nueva versión de mi portfolio (que anteriormente estaba desarrollado en WordPress) y es un buen espacio para mis experimentos, animaciones en CSS y efectos con JS. De momento es solo front, el back está en proceso al igual que el blog que comenzará a nutrirlo.",
        "tech": "HTML5 - CSS3 - JavaScript - React.js - Git",
        "textBtn": "Ir a GitHub",
        "urlBtn": "https://github.com/fernandogutz/portfolio-react"
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
        "tag": "Emprendimiento",
        "urlImg": beDigitalImg,
        "altImg": "Be Digital Studio",
        "title": "Be Digital",
        "description": "Be Digital es un estudio descentralizado que se especializa en la creación de productos y experiencias digitales. El sitio fue diseñado con Elementor para reducir el tiempo de desarrollo y la complejidad técnica, centrando los esfuerzos en optimizar las interfaces a nivel de UX/UI. Actualmente me encargo de gestionar los proyectos y delegar la mayor parte de la ejecución a otros perfiles tech",
        "tech": "HTML5 - CSS3 - WordPress - Elementor",
        "textBtn": "Visitar sitio",
        "urlBtn": "https://bedigital.cl/"
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
    }
]

export {
    listProjects
}