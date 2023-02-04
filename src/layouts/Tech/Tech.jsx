import React from 'react';
import './Tech.css';
import Skill from '../../components/Skills/Skill';
import { listOfSkills } from '../../data/listOfSkills';
import { useState } from 'react';

const Tech = () => {
    const [techCategory, setTechCategory] = useState('front');
    const onCategoryChange = (e) => {
        //console.log(e.target.attributes.id.value);
        const newCat = e.target.attributes.id.value;
        setTechCategory(newCat);
        document.querySelector('.activeCategory').classList.remove('activeCategory');
        document.querySelector(`#${newCat}`).className = 'activeCategory';

    }

    return (
        <div id="tecnologias" className="containerTechnologies">
            <div className="technologies" data-aos="fade-up">
                <h2 className="technologies__title">Skills 💻</h2>

                <div className='techFilters'>
                    <button className='activeCategory' id='front' onClick={onCategoryChange}>Front</button>
                    <button id='back' onClick={onCategoryChange}>Back</button>
                    <button id='design' onClick={onCategoryChange}>Design</button>
                    <button id='tool' onClick={onCategoryChange}>Tools</button>
                </div>

                <div className="tech-list">
                    {
                        listOfSkills.map(skill => (
                            skill.tag == techCategory ?
                                <Skill
                                    urlImg={skill.urlImg}
                                    title={skill.title}
                                    key={skill.title}
                                />   
                            : null
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Tech