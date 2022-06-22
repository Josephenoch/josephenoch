import React,{useState} from 'react'
import { useProject } from '../../Contexts/ProjectContext'
import ProjectStack from './ProjectStack'
import { CircleSpinner } from "react-spinners-kit";
import DropDown from '../GeneralComponents/DropDown';
const ProjectsNav = ({stack, handleCheck}) => {
  const { loading } = useProject()
  const [projDropDown, setProjDropDown] = useState(true)
  const style= {
      dropDownText:projDropDown?"text-white":"lg:text-secondary",
      dropDownContent:projDropDown?"h-fit opacity-100 flex":"h-0 opacity-0 hidden"
  }
 
  return (
    <>
        <nav className="text-sm min-w-full lg:min-w-[13rem] min-h-fit lg:min-h-full lg:border-r-2 lg:border-r-lines flex flex-col">
            <DropDown name="projects">
                {loading?
                <div className="flex justify-center py-10">
                    <CircleSpinner size={15} color="#4D5BCE" loading={loading} /> 
                </div>:<div className={`${style.dropDownContent} w-full mt-3 space-y-3 flex-col items-center`}>
                    { stack.map((proj,id)=><ProjectStack key={id} name={proj.stack} checked={proj.checked} id={id} handleCheck={handleCheck}/>)}
                </div>}
            </DropDown>
        </nav>
        
    </>
  )
}

export default ProjectsNav