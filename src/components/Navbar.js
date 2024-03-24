import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div  className="navbar">
        <ul>


            <li className='about'>
             <NavLink to="/">_about-me</NavLink> 
              </li>
            <li className='projects'>
            <NavLink to="/projects">_projects</NavLink>               </li>
            <li className='more'>
            <NavLink to="/more">_more</NavLink>               
              </li>

            <li className='contact'>
            <NavLink to="/contact">_contact</NavLink>               </li>

        </ul>
        </div>
    </div>
  )
}

export default Navbar