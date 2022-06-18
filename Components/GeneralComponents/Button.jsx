import React from 'react'

const Button = ({children, ...rest}) => {
  return (
    <button rest className="bg-lines/60 hover:scale-105 hover:bg-lines/80 text-xs mt-4 active:bg-lines active:scale-90 transition-all duration-200 ease-linear px-4 py-2 rounded-md ">{children}</button>
  )
}

export default Button