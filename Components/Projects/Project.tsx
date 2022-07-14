import React, { FC } from 'react'
import Image from 'next/image'
export interface project{
    description:string,
    title:string,
    picture:string,
    preview:string,
    github:string
      
   }
interface Props{
    project:project
}
const Project:FC<Props> = ({project}) => {

  return (
    <div title={project.description} className="hover:scale-105 transition-all duration-200 ease-linear cursor-pointer lg:ml-16 w-3/4 lg:w-80 mt-10 h-fit flex flex-col space-y-2">
        <p className="text-secondary text-xs"><span className="text-secondary-purple">Project</span> {`// _${project.title}`}</p>
        <div className="w-full h-64 border-[0.5px] rounded-lg border-white/20">
            <div className="h-1/2 relative w-full">
                <Image 
                    src={project.picture} 
                    alt="Hero"
                    layout="fill" 
                    objectFit="cover"
                    className="rounded-t-lg"
                />
                <i className="fab fa-react absolute z-20 bg-[#86E1F9] text-black font-bold top-2 right-2 p-1 text-md"></i>
            </div>
            <div className="h-1/2 p-6 space-y-2 border-t-[0.5px] rounded-b-lg border-white/20 bg-primary-light">
                <p className="text-sm line-clamp-2 text-secondary">{project.description}</p>
                <div className="space-x-3">
                    <a href={project.preview} target="_blank" rel="noreferrer" className="bg-[#1C2B3A]/60 p-2 rounded-lg hover:bg-[#1C2B3A]/80 active:bg-[#1C2B3A] hover:scale-[1.02] active:scale-90 transition-all duration-100 ease-linear text-sm">view project</a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="bg-[#1C2B3A]/60  text-lg rounded-xl hover:bg-[#1C2B3A]/80 active:bg-[#1C2B3A] hover:scale-[1.02] active:scale-90 transition-all duration-100 ease-linear"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project