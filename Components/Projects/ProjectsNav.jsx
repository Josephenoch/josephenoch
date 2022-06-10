import React,{useState} from 'react'
import ProjectStack from './ProjectStack'

const ProjectsNav = ({stack, handleCheck}) => {
  const [projDropDown, setProjDropDown] = useState(true)
  const style= {
      dropDownText:projDropDown?"text-white":"text-secondary",
      dropDownContent:projDropDown?"h-fit opacity-100":"h-0 opacity-0"
  }
 
  return (
    <nav className="text-sm min-w-[13rem] min-h-full border-r-2 border-r-lines flex flex-col">
        <div onClick={()=>setProjDropDown(prevState=>!prevState)} className={`${style.dropDownText} hover:text-white cursor-pointer  py-2 border-b-2 border-lines h-fit w-full flex justify-start`}>
            {
                projDropDown?<i className="ri-arrow-down-s-fill ml-2"></i>:<i className="ri-arrow-right-s-fill ml-2"></i>
            }
            <h1 className="ml-2">Projects</h1>
        </div>
        <div className={`${style.dropDownContent} w-full mt-4 flex space-y-3 flex-col items-center`}>
            {stack.map((proj,id)=><ProjectStack key={id} name={proj.stack} checked={proj.checked} id={id} handleCheck={handleCheck}/>)}
        </div>
    </nav>
  )
}

export default ProjectsNav