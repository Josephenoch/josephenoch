import React,{useState,useEffect} from 'react'
import Project from '../Components/Projects/Project'
import ProjectsNav from '../Components/Projects/ProjectsNav'
import Head from 'next/head'
import { useProject } from '../Contexts/ProjectContext'
import ErrorModal from '../Components/GeneralComponents/ErrorModal'

const Projects = () => {
  const {data:project, error, clearError, getData} = useProject()
  const [stack, setStack] = useState([])
  useEffect(()=>{
      const smt =project.map(proj=>{return {stack:proj.stack, checked:false}})
      setStack(smt)
    },[project])

  const handleCheck = (id) => {
    setStack(prevState=>{
        const newState = [...prevState]
        newState[id] = {...prevState[id],checked:!prevState[id].checked}
        return [...newState]
    })
  }
  
  return (
    <aside className="h-full w-full flex">
      <Head>
        <title>Joseph Enoch | Projects</title>
      </Head>
      {error&&<ErrorModal retry={getData} close={clearError}/>}
      <ProjectsNav stack={stack} handleCheck={handleCheck}/>
      <div className=" pb-5 flex w-full overflow-y-auto scrollbar-y flex-wrap">
        {project.map(stak=>
          stak.projects.map((proj,id)=>{
            const checked = stack[stack.findIndex(sta=>sta.stack===stak.stack)]?.checked     
            return checked && <Project  key={id} project={proj}/>
          })
        )}
      </div>
    </aside>
  )
}

export default Projects