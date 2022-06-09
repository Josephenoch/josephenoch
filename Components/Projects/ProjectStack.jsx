import React from 'react'

const ProjectStack = ({name}) => {
  return (
    <div className="w-4/5 py-2 space-x-3 cursor-pointer">
        <input type="checkbox" className=" rounded-sm bg-inherit text-secondary border-white border-[0.5px] focus:ring-0"/>
        <span>{name}</span>
    </div>
  )
}

export default ProjectStack