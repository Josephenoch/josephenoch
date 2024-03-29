import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
interface Props{
  children:ReactNode,
  [x:string]:any,
  onClick?:(e?:MouseEvent)=>void
}
const Button:FC<ButtonHTMLAttributes<HTMLButtonElement> > = ({onClick,children, ...rest}) => {
  return (
    <button {...rest} onClick={onClick} className="bg-lines/60 hover:scale-105 hover:bg-lines/80 text-xs mt-4 active:bg-lines active:scale-90 transition-all duration-200 ease-linear px-4 py-2 rounded-md ">{children}</button>
  )
}

export default Button