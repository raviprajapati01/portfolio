import React from 'react'
import './Project.css'

const ProjectCart=({
    projectName,
    projectDescription,
    imageUrl,
    videoUrl,
    projectUrl
})=>{
    return (
     <div className='project-cart'>
        <div className='img-container'>
            <a href="#" className='project-external-link'>
                <img  src={imageUrl} alt='project' className='project-img'/>
            </a>
        </div>

        <div className='project-detail-container'>
            <h2 className='project-heading'>{projectName}</h2>
            <p className='project-detail'>{projectDescription}</p>
            <a href="#" className='project-yt-link'>explore!</a>
        </div>
     </div>
    );
}

export default ProjectCart;