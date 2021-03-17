import React from 'react'

import './button.css'

function Button({ buttonType, buttonText }) {
  return (
      <button className={buttonType} >
        {buttonText}
      </button>
  )
}

export default Button
