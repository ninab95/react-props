import React from 'react'
import Button from '../Button/Button'
import logo from '../../img/logo.png'

import './header.css'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Button buttonType="login" buttonText="Login"/>
    </div>
  )
}

export default Header