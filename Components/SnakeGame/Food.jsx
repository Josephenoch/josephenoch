import React from 'react'

const Food = ({food}) => {
  return (
    <div className="bg-accent z-10 absolute w-[4%] h-[4%]" style={{top:`${food.top}%`,left:`${food.left}%`}}></div>
  )
}

export default Food