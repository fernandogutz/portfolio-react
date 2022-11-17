import pomotaskImg from '../img/proyectos/pomotask.png';
import marsImg from '../img/proyectos/mars.jpg';
import delegaImg from '../img/proyectos/delega.png';
import godkoutImg from '../img/proyectos/godkout.jpg';

const listProjects = [
    
    {
        "tag": "Proyecto personal",
        "urlImg": godkoutImg,
        "altImg": "Godkout Web",
        "title": "Godkout.com",
        "description": "Me apasiona el entrenamiento físico desde que tengo memoria y quise crear algo en torno a ello. GODKOUT es una plataforma que busca profesionalizar el Street Workout, deporte que ha sido reconocido oficialmente en Chile en 2021. Busco poder vincular la plataforma con organizaciones de distintos continentes para que los atletas puedan competir globalmente.",
        "tech": "Figma - HMTL5 - CSS3 - React.js - Git",
        "textBtn": "Visitar sitio",
        "urlBtn": "https://godkout.com/"
    },

    {
        "tag": "Proyecto personal",
        "urlImg": marsImg,
        "altImg": "Proyecto Mars Photos",
        "title": "Mars",
        "description": "Usando la REST API de NASA, desarrollé este proyecto que muestra las últimas 24 imágenes de Marte tomadas por los Rovers Curiosity, Opportunity y Spirit. Además, he incorporado un elemento 3D interactivo con Three.js (que funciona sobre WebGL) y animaciones CSS/JS para brindar una experiencia web un poco más inmersiva.",
        "tech": "HTML5 - CSS3 - JavaScript - Three.js - Git",
        "textBtn": "Ir a GitHub",
        "urlBtn": "https://github.com/fernandogutz/mars"
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
        "tag": "Cliente",
        "urlImg": delegaImg,
        "altImg": "Theme WordPress a medida Delega.cl",
        "title": "Delega Theme WP",
        "description": "Siendo Freelance tuve la oportunidad de trabajar con increíbles personas y sus empresas, entre todos ellos destaco Delega, un sitio web implementado en WordPress a través de un Child Theme maquetado desde cero (HTML y CSS). Con este proyecto logré adentrarme bastante en el core de WP, formando mis bases para seguir desarrollando temas y plugins a medida con PHP.",
        "tech": "HTML5 - CSS3 - JavaScript - jQuery - PHP - WordPress - WooCommerce",
        "textBtn": "Visitar sitio",
        "urlBtn": "https://delega.cl/"
    },

]

export {
    listProjects
}