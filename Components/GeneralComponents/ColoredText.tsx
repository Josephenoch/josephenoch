import React,{FC, ReactNode} from 'react'
interface Props{
  children:ReactNode,
  color:string,
  className?:string
}
const ColoredText:FC<Props> = ({children, color, className, ...rest}) => {
  return (
    <span {...rest} className={`text-${color}`}>{children}</span>
  )
}

export default ColoredText