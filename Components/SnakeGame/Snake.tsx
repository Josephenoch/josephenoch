import React from 'react'
import { INode } from '../../Interfaces/SnakeComponents'
interface Props{
  snakeBody:INode[]
}
const Snake = ({snakeBody}:Props) => {
  return (
    <>
      {snakeBody.map((snake,index)=><div key={index} className="bg-accent-green absolute w-[2%] z-20 h-[2%]" style={{top:`${snake.top}%`,left:`${snake.left}%`}}></div>)}
    </>
  )
}

export default Snake