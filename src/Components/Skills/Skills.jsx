import React from 'react'
import { Container, OurSkills, Progress, SkillName } from './Skills.style'
import MainTitle from '../MainTitle/MainTitle'
import { SkillsData } from './SkillsData'


const Skills = React.forwardRef((props , ref) => {
    
  return (
    <OurSkills ref={ref}>
        <MainTitle text='Our Skills' />
        <Container>
            <img src="/Images/skills.png" alt="" />
            <div style={{flex : '1'}}>
                {
                    SkillsData.map(skill => <div key={skill.id}> 
                        <SkillName>{skill.name}<span>{skill.extent}</span></SkillName>
                        <Progress><span style={props.scroll ? {width : skill.extent} : {width : '0'}}></span></Progress>
                    </div>)
                }
            </div>
        </Container>
    </OurSkills>
  )
})


export default Skills