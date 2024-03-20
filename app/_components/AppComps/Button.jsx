import React from 'react'

function Button({ children }) {
  return (
    <button className='custom-button'>
        {children}
    </button>
  )
}

export default Button