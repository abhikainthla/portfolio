import React from 'react'
import Navbar from '../components/Navbar'
import Asidebar from '../components/Asidebar'
import Contact from '../components/Contact'

function ContactScreen() {
  return (
    <div className='container'>
        <div>
        <Asidebar/>
        </div>
        <div>
        <Navbar/>
        <Contact/>
        </div>
    </div>
  )
}

export default ContactScreen