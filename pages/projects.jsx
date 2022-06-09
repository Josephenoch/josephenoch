import React,{useState} from 'react'
import Project from '../Components/Projects/Project'
import ProjectsNav from '../Components/Projects/ProjectsNav'

const Projects = () => {
  return (
    <aside className="h-full w-full flex">
      <ProjectsNav/>
      <div className="mx-10 pb-5 justify-between flex w-full overflow-y-auto scrollbar-y flex-wrap">
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>

      </div>
    </aside>
  )
}

export default Projects