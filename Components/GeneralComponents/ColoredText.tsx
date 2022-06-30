import React,{FC, ReactNode} from 'react'
interface Props{
  children:ReactNode,
  color:string
}
const ColoredText:FC<Props> = ({children, color}) => {
  return (
    <span className={`text-${color}`}>{children}</span>
  )
}

export default ColoredText