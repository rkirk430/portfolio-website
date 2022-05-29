import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaRegUser} from 'react-icons/fa'
import {BiBook, BiMessageSquareDots} from 'react-icons/bi'
import {MdOutlineWorkOutline} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href = "#" className= {activeNav === '#' ? 'active' : ''}> <AiOutlineHome /> </a> 
      <a href = "#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''} > <FaRegUser /> </a> 
      <a href = "#experience" onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}> <BiBook /> </a> 
      <a href = "#services" onClick={() => setActiveNav('#services')} className= {activeNav === '#services' ? 'active' : ''}> <MdOutlineWorkOutline /> </a> 
      <a href = "#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDots /> </a> 
    </nav>
  )
}

export default Nav