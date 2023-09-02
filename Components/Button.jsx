import React from 'react'
import './Button.css'

const Button = ({children,toggleIt}) => {
  return (
    <button onClick={toggleIt} className='w-full lg:w-[60px] h-[60px] rounded-full'>
      {children}
    </button>
  )
}

export default Button
