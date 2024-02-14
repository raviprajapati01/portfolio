import React from 'react'
import { Header } from '../Header/Header'
import FooterLink from '../Footer/FooterLink'
import slillvector from './../../assets/skills_vector.png'
import './Skills.css';
import { skillList } from '../../assets/skillsData';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <div className='section-container'>
          <Header
            heading="My Skills."
            details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
          />

          <div className='skill-card-container'>
              {
                skillList.map((skill)=>{
                  return (
                   <SkillCard skillName={skill.skillName}
                    skillUrl={skill.skillUrl}
                   />
                  )
                })
              }
          </div>

          <FooterLink
            phrase='Get in'
            link="touch."
            toAddress="/contact"
          />

          <div className='skill-vector-frame'>
            <img src={slillvector}
              alt=''
              className='skill-vector'
            />
          </div>
    </div>
  )
}

export default Skills
