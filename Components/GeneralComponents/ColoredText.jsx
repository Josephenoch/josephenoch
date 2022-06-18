import React from 'react'

const ColoredText = ({children, color}) => {
  return (
    <span className={` text-${color}`}>{children}</span>
  )
}

export default ColoredText