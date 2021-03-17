import React from 'react'
import Button from '../Button/Button'
import hero from '../../img/hero.png'

import './hero.css'

function Hero() {
  return (
    <div className="heroContainer">
      <div className="wrapper">
        <h1>Powering Business Everywhere</h1>
        <div className="btnWrapper">
          <Button buttonType="getStarted" buttonText="Get Started" />
          <Button buttonType="demo" buttonText="Request Demo" />
        </div>
      </div>
        <img src={hero} alt="hero" />
    </div>
  )
}

export default Hero
