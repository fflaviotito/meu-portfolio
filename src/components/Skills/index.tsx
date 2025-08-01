import skillsData from '../../data/skillsData'

const Skills = () => {
    return (
        <>
            <ul>
                {skillsData.map(skill =>
                    <li key={skill.id}>{skill.label}</li>
                )}
            </ul>
        </>
    )
}

export default Skills