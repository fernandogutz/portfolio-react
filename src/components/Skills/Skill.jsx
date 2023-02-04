import './Skill.css';



const Skill = ({ urlImg, title }) => {
    return (
        <article className="skill" data-aos="fade-up">
            <img className="skill__img" src={urlImg} alt={title} />
            <h3 className='skill__title'>{title}</h3>
        </article>
    )
}

export default Skill