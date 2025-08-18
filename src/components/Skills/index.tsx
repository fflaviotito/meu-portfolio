import skillsData from '../../data/skillsData'

const Skills = () => {
    return (
        <>
            <ul>
                {skillsData.map(skill =>
                    <li key={skill.id}>
                        <img title={skill.label} src={skill.icon} alt="" />
                    </li>
                )}
            </ul>
        </>
    )
}

export default Skills