import React from 'react'
import Hero from "../../Assets/illustration-hero.svg"
import Image from 'next/image'
const Project = () => {
  return (
    <div className="w-80 mt-10 h-fit flex flex-col space-y-2">
        <p className="text-secondary text-xs"><span className="text-secondary-purple">Project 1</span> {"//"} _ui_animations</p>
        <div className="w-full h-64 border-[0.5px] rounded-lg border-white/20">
            <div className="h-1/2 relative w-full">
                <Image 
                    src={Hero} 
                    alt="Hero"
                    layout="fill" 
                    objectFit="cover"
                    className="rounded-t-lg"
                />
                <i className="fab fa-react absolute z-20 bg-[#86E1F9] text-black font-bold top-2 right-2 p-1 text-md"></i>
            </div>
            <div className="h-1/2 p-6 space-y-2 border-t-[0.5px] rounded-b-lg border-white/20 bg-primary-light">
                <p className="text-sm text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="bg-[#1C2B3A]/60 p-2 rounded-lg hover:bg-[#1C2B3A]/80 active:bg-[#1C2B3A] hover:scale-[1.02] active:scale-90 transition-all duration-100 ease-linear text-sm">view project</button>
            </div>
        </div>
    </div>
  )
}

export default Project