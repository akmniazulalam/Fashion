import React from 'react'

const Button = ({btn,className}) => {
  return (
    <>
    <button className={`font-pops text-2xl font-semibold ${className}`}>{btn}</button>
    
    </>
  )
}

export default Button