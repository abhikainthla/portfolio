import React from 'react'

function SkillsCard(props) {
  return (
    <div className='skill-card'>
    {props.icon}
    <h3>{props.title}</h3>
    <p>{props.subtitle}</p>
    </div>
  )
}

export default SkillsCard