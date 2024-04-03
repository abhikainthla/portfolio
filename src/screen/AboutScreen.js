import React from 'react'
import About from '../components/About'
import Asidebar from '../components/Asidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function AboutScreen() {
  
  return (
    <div className='main'>
    <div className='container'>
    <div>
        <Asidebar/>
        </div>
        <div>
        <Navbar/>
        <About/>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default AboutScreen