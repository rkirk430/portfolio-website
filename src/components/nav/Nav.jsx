import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaRegUser} from 'react-icons/fa'
import {BiBook, BiMessageSquareDots} from 'react-icons/bi'
import {MdOutlineWorkOutline} from 'react-icons/md'

const Nav = () => {
  return (
    <div>
      <a href = "#"> <AiOutlineHome /> </a> 
      <a href = "#about"> <FaRegUser /> </a> 
      <a href = "#experience"> <BiBook /> </a> 
      <a href = "#services"> <MdOutlineWorkOutline /> </a> 
      <a href = "#contact"> <BiMessageSquareDots /> </a> 

    </div>
  )
}

export default Nav