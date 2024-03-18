import React from 'react'
import About from '../components/About'
import Asidebar from '../components/Asidebar'
import Navbar from '../components/Navbar'
function AboutScreen() {
  return (
    <div className='container'>
        <div>
        <Asidebar/>
        </div>
        <div>
        <Navbar/>
        <About/>
        </div>
    </div>
  )
}

export default AboutScreen