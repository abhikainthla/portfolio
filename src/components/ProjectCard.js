import React from 'react'
function ProjectCard(props) {
  return (
    <div className='project-container'>
            <h2>{props.title}</h2>
        <div className='project-card'>
        <div className='img-container'>
            <img src={props.img}></img>
        </div>
        <div>
            <p>{props.desc}</p>
            </div>
            <div>
            <a href={props.link}><button>View Project</button></a>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard