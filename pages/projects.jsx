import React,{useState} from 'react'
import Project from '../Components/Projects/Project'
import ProjectsNav from '../Components/Projects/ProjectsNav'
import Head from 'next/head'

const Projects = () => {
  const projects= [
    {
      stack:"React",
      proficiency:"80",
      projects:[
        {
          title:"chat_up",
          description:"Chat Up is a real time messaging application built with React, MUI and Firebase",
          preview:"https://chat-up-chi.vercel.app",
          github:"https://github.com/josephenoch/chat-up"
        },
        {
          title:"portfolio_dashboard",
          description:"An all encompassing dashboard template built with React, fakerjs and MUI",
          preview:"https://portfolio-dashboard-josephenoch.vercel.app/",
          github:"https://github.com/Josephenoch/portfolio_dashboard"
        }
      ]
    },
    {
      stack:"NextJS",
      proficiency:"50",
      projects:[
        {
          title:"Events Listing Page",
          description:"An events Listing page built with NextJS, TailwindCSS and Graphql",
          preview:"https://event-listing-page.vercel.app/",
          github:"https://github.com/Josephenoch/events-listing-page"
        }
      ]
    },
    {
      stack:"Django",
      proficiency:"10",
      projects:[
        {
          title:"Redev Talks",
          description:"A blogging site for developers and people in technology",
          preview:"#",
          github:"https://github.com/josephenoch/redev_talks"
        }
      ]
    }
  ]
  const ProjStack = projects.map(proj=>{return {stack:proj.stack, checked:false}})
  const [stack, setStack] = useState(ProjStack)
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
      <ProjectsNav stack={stack} handleCheck={handleCheck}/>
      <div className=" pb-5 flex w-full overflow-y-auto scrollbar-y flex-wrap">
        {projects.map((stak,index)=>
          stak.projects.map((proj,id)=>{
            const checked = stack[stack.findIndex(sta=>sta.stack===stak.stack)].checked     
            return checked && <Project  key={id} project={proj}/>
          })
        )}
      </div>
    </aside>
  )
}

export default Projects