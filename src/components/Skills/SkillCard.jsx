import React from 'react'


const SkillCard=({skillName, skillUrl})=>{
    return(
        <div className='skill'>
            <img src={skillUrl} alt='skill' height={100} width={100}/>
            <p>{skillName}</p>
        </div>
    )
}

export default SkillCard;