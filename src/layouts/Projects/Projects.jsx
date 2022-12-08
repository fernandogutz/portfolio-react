import React from 'react';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { listProjects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <div id="proyectos" className="fondoProjects">
        <div className="containerProjects">
            <div className="containerProjects__content">
                <h2 className="projects__title">Proyectos ✒️</h2>
                <div className="projects">
                    {
                        listProjects.map(project => (
                            <ProjectItem
                                key={project.title}
                                tag={project.tag}
                                urlImg={project.urlImg}
                                altImg={project.altImg}
                                title={project.title}
                                description={project.description}
                                tech={project.tech}
                                textBtn={project.textBtn}
                                urlBtn={project.urlBtn}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects