import React from 'react'

const Food = ({food}) => {
  return (
    <div className="bg-accent z-10 absolute w-[2%] h-[2%]" style={{top:`${food.top}%`,left:`${food.left}%`}}></div>
  )
}

export default Food