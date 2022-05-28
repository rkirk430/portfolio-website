import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div clasname = 'header_socials'>
        <a href = "https://linkedin.com/in/robert-kirk-1" target = "_blank"><BsLinkedin /></a>
        <a href = "https://github.com/rkirk430" target = "_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials