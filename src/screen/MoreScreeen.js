import React from 'react'
import More from '../components/More'
import Navbar from '../components/Navbar'
import Asidebar from '../components/Asidebar'
import Footer from '../components/Footer'
function MoreScreeen() {
  return (
    <div className='main'>
    <div className='container'>
        <div>
        <Asidebar/>
        </div>
        <div>
        <Navbar/>
        <More/>
        </div>
    </div>
    <Footer/>
    </div>
      )
}

export default MoreScreeen