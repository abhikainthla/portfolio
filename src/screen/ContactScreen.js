import React from 'react'
import Navbar from '../components/Navbar'
import Asidebar from '../components/Asidebar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function ContactScreen() {
  return (
    <div className='main'>
    <div className='container'>
        <div>
        <Asidebar/>
        </div>
        <div>
        <Navbar/>
        <Contact/>
        </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default ContactScreen