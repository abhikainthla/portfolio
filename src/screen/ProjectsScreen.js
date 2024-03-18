import React from 'react'
import Navbar from '../components/Navbar'
import Asidebar from '../components/Asidebar'
import Projects from '../components/Projects'

function ProjectsScreen() {
  return (
    <div className='container'>
        <div>
        <Asidebar/>
        </div>
        <div>
        <Navbar/>
        <Projects/>
        </div>
    </div>
  )
}

export default ProjectsScreen