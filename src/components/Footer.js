import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { RxSlash } from "react-icons/rx";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
function Footer() {
  return (
    <div>
        <div className='footer'>
            <span >_coded with <span className='footer-icons'><MdArrowBackIos style={{marginRight:"-5px"}} color='#12f7d6' /><FaHeart color='red' /><RxSlash color='#12f7d6' /><MdArrowForwardIos color='#12f7d6' style={{marginLeft:"-5px"}} /></span> by abhishek kainthla </span>
        </div>
    </div>
  )
}

export default Footer