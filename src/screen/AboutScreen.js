import React from 'react'
import About from '../components/About'
import Asidebar from '../components/Asidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function AboutScreen() {
  return (
    <div className='main'>
    <div className='container'>
        <div className='asidebar'>
        <Asidebar/>
        </div>
        <div  className="content">
          <div>
          <Navbar/>
          </div>
          <div>
          <About/>
          </div>
        </div>
    </div>
    <div>
    <Footer/>
    </div>
    </div>

  )
}

export default AboutScreen