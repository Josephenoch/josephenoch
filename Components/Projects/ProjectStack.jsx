import React from 'react'

const ProjectStack = (props) => {
  return (
    <div onClick={()=>props.handleCheck(props.id)} className="w-4/5 py-2 space-x-3 cursor-pointer">
        <input type="checkbox" checked={props.checked} className=" rounded-sm bg-inherit text-secondary border-white border-[0.5px] focus:ring-0"/>
        <span>{props.name}</span>
    </div>
  )
}

export default ProjectStack