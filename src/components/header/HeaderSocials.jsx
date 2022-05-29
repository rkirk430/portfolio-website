import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className = "header__socials">
        <a href = "https://www.linkedin.com/in/robert-kirk1/" target = "_blank" rel = "noreferrer" ><BsLinkedin /></a>
        <a href = "https://github.com/rkirk430" target = "_blank" rel = "noreferrer"><FaGithub /></a>
        <a href = "https://dribble.com" target = "_blank" rel = "noreferrer"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials