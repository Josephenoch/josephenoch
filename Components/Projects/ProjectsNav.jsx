import React,{useState} from 'react'
import ProjectStack from './ProjectStack'
import { CircleSpinner } from "react-spinners-kit";
import DropDown from '../GeneralComponents/DropDown';
const ProjectsNav = ({stack, handleCheck}) => {
 
 
  return (
    <>
        <nav className="text-sm min-w-full lg:min-w-[13rem] min-h-fit lg:min-h-full lg:border-r-2 lg:border-r-lines flex flex-col">
            <DropDown name="projects">
                <div className="w-full space-y-3 ml-4 flex-col items-center">
                    { stack.map((proj,id)=><ProjectStack key={id} name={proj.stack} checked={proj.checked} id={id} handleCheck={handleCheck}/>)}
                </div>
            </DropDown>
        </nav>
        
    </>
  )
}

export default ProjectsNav