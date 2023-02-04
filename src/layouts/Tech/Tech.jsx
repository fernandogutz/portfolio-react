import React from 'react';
import './Tech.css';
import Skill from '../../components/Skills/Skill';
import { listOfSkills } from '../../data/listOfSkills';

const Tech = () => {
    return (
        <div id="tecnologias" className="containerTechnologies">
            <div className="technologies" data-aos="fade-up">
                <h2 className="technologies__title">Skills 💻</h2>

                <div className="tech-list">
                    {
                        listOfSkills.map(skill => (
                            <Skill
                                urlImg={skill.urlImg}
                                title={skill.title}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Tech