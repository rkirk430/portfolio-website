import React from 'react'
import './header.css'
import CTA from './CTA'
import Headshot from '../../assets/headshot_picture.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm </h5>
        <h1> RJ Kirk </h1>
        <h5 className = "text-light"> Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src = {Headshot} alt = "Me" />
        </div>
        <a href = "#contact" className='scroll__down'> Scroll Down </a>
      </div>
    </header>
  )
}

export default Header