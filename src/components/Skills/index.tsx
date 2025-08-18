import skillsData, { type ISkill } from '../../data/skillsData'
import { useState } from 'react'

import { SkillsList, SkillItem } from './styles'
import { TitleSection } from '../../styles/TitleSection'

const Skills = () => {

    const [skillSelected, setSkillSelected] = useState<ISkill>()

    const clickSkill = (skill: ISkill) => {
        setSkillSelected(skill)
    }

    return (
        <>
            <TitleSection>Habilidades</TitleSection>
            <SkillsList>
                {skillsData.map(skill =>
                    <SkillItem key={skill.id} onClick={() => clickSkill(skill)}>
                        <img title={skill.label} src={skill.icon} alt={`Logo do ${skill.label}`} />
                    </SkillItem>
                )}
            </SkillsList>
            <div>
                {skillSelected ? 
                    <>
                        <h3>{skillSelected.label}</h3>
                        <p>{skillSelected.description}</p>
                    </>
                :
                    <p>Clique em uma tecnologia para ver os detalhes</p>
                }
            </div>
        </>
    )
}

export default Skills