import React from 'react'

function MobileProjectCard(props) {
  return (
    <div className='mob-project-card'>
            <div className='mob-project-container'>
            <h2>{props.title}</h2>
        <div className='mob-project-card'>
        <div className='mob-img-container'>
            <img src={props.img}></img>
        </div>
        <div>
            <p>{props.desc}</p>
            </div>
            <div className='mob-view-btn'>
            <a href={props.link}><button>View Project</button></a>
        </div>
    </div>
    </div>
    </div>
  )
}

export default MobileProjectCard