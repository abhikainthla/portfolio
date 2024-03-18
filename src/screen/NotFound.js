import React from 'react'
import { NavLink } from 'react-router-dom'
function NotFound() {
  return (

        <section class="page_404">
        <div class="container">
          <div class="row">
            <div>
              <div class=" text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>
  
                <div class="contant_box_404">
                  <h3 class="h2">Looks like you're lost</h3>
  
                  <p>The page you are looking for is not available!</p>
  
                  <button className='error-btn'><NavLink to="/">Go Back</NavLink></button>
                    
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default NotFound