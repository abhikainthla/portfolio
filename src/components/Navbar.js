import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div  className="navbar">
        <ul>


            <li className='about'>
             <NavLink to="/" activeClassName='active'>_about-me</NavLink> 
              </li>
            <li className='projects'>
            <NavLink to="/projects" activeClassName='active'>_projects</NavLink>               </li>
            <li className='more'>
            <NavLink to="/more" activeClassName='active'>_more</NavLink>               
              </li>

            <li className='contact'>
            <NavLink to="/contact" activeClassName='active'>_contact</NavLink>               </li>

        </ul>
        </div>
    </div>
  )
}

export default Navbar