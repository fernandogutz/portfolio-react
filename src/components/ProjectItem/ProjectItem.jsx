import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({tag, urlImg, altImg, title, description, tech, textBtn, urlBtn}) => {
  return (
    <article className="project">
      <h4 className="project__tag">{tag}</h4>
      <img className="project__img" src={urlImg} alt={altImg}/>
      <section className="project__contentSection">
          <h3 className="project__title">{title}</h3>
          <p className="project__description">{description}</p>
          <p className="project__technologies"><strong><span>💻</span> Tecnologías:</strong> {tech}</p>
          <a href={urlBtn} target="_blank" rel="noreferrer" className="project__btn btn-primary">{textBtn}</a>
      </section>
    </article>
  )
}

export default ProjectItem