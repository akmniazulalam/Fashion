import React from 'react'

const Heading = ({name,className}) => {
  return (
    <h1 className={`${className}`}>{name}</h1>
  )
}

export default Heading