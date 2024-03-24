import React from 'react'
import Navbar from '../components/Navbar'
import Asidebar from '../components/Asidebar'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
function ProjectsScreen() {
  return (
    <>
    <div className='container'>
        <div>
        <Asidebar/>
        </div>
        <div>
        <Navbar/>
        <Projects/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProjectsScreen