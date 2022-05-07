import React from 'react'
import { AboutIcon } from '../components/AboutMe/AboutIcon'
import { PersonalInfoSection } from '../components/AboutMe/PersonalInfoSection'

const AboutMe = () => {
  const icons = [
    {
      icon:<i class="ri-terminal-box-fill"></i>,
      link:"/"
    },
    {
      icon:<i class="ri-user-4-fill"></i>,
      link:"/"
    },
    {
      icon:<i class="ri-gamepad-fill"></i>,
      link:"/"
    }
  ]
  return (
    <div className="h-full flex">
      <div className="w-12 h-full border-r-2 border-r-lines items-center flex flex-col">
        {
          icons.map(icon=> <AboutIcon icon={icon.icon} link={icon.link}/>)
        }
        
      </div>
      <div className="w-40 h-full border-r-2 border-r-lines">
        <PersonalInfoSection/>
      </div>
      <div className="w-[41.4%] h-full border-r-2 border-r-lines">
        hi
      </div>
      <div className="w-4 h-full">

      </div>
      <div className="w-[41.4%] h-full border-x-2 border-x-lines">
        hi
      </div>
      <div className="w-4 h-full">

      </div>
    </div>
  )
}

export default AboutMe