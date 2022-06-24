import React from 'react'

const Snake = ({snakeBody}) => {
  return (
    snakeBody.map((snake,index)=><div key={index} className="bg-accent-green absolute w-[4%] z-20 h-[4%]" style={{top:`${snake.top}%`,left:`${snake.left}%`}}>
            </div>)
  )
}

export default Snake