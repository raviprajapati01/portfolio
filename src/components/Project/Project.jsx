import React from 'react'
import { Header } from '../Header/Header'
import FooterLink from '../Footer/FooterLink'
import { projectsData } from '../../assets/projectsData'
import ProjectCart from './ProjectCart'
// import conttactVector from './../../assets/contact_anime.png'

 const Project = () => {
  return (
    <div className='section-container pro-bg'>
        <Header heading="My Projects"
          details="Here are a cool things l've working on, do check them out!"
        />
         
         <div className='project-card-container'>
         {
          projectsData.map((project)=>{
            return(
              <ProjectCart className=""
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              imageUrl={project.imageUrl}
              videoUrl={project.videoUrl}
              projectUrl={project.projectUrl}
               />
            )
          })
         }
         </div>

        <FooterLink 
          phrase="check out"
          link="my Skills"
          toAddress="/skills"
        />

        {/* <div className='vector-frame'>
            <img
                src={conttactVector}
                alt='vector'
                className='about-vecto2'
            />
        </div> */}
    </div>
  )
}

export default Project;
