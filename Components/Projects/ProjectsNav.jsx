import React,{useState} from 'react'
import ProjectStack from './ProjectStack'

const ProjectsNav = () => {
  const [projDropDown, setProjDropDown] = useState(true)
  const style= {
      dropDown:projDropDown?"text-white":"text-secondary"
  }
  return (
    <nav className="text-sm w-52 min-h-full border-r-2 border-r-lines flex flex-col">
        <div onClick={()=>setProjDropDown(prevState=>!prevState)} className={`${style.dropDown} hover:text-white cursor-pointer  py-2 border-b-2 border-lines h-fit w-full flex justify-start`}>
            {
                projDropDown?<i className="ri-arrow-down-s-fill ml-2"></i>:<i className="ri-arrow-right-s-fill ml-2"></i>
            }
            <h1 className="ml-2">Projects</h1>
        </div>
        <div className="w-full flex space-y-3 flex-col items-center">
            <ProjectStack name="React"/>
            <ProjectStack name="Next"/>
            <ProjectStack name="Django"/>
            <ProjectStack name="Vanilla JS"/>

        </div>
    </nav>
  )
}

export default ProjectsNav