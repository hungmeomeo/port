import React from 'react'
import './Header.css'
import CTA from './CTA'
import Social from './Social'
import ME from '../../assets/me.jpg'

const Header = () => {
  return (
    <header>
      <div className="container __header_container">
        <h5>Hello I'm</h5>
        <h1>Hung</h1>
        <h5 className="text-light">Computer Science </h5>
        <CTA />
        <Social/>

        {/* <div className='me'>
          <img src = {ME} alt ="me"/>
        </div> */}

        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header