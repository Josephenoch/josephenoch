import React, { FC, ReactElement } from 'react'
import AboutIcon from './AboutIcon'


const AboutNav:FC = () => {
  const icons = [
    {
      icon:<i className="ri-user-4-fill"></i>,
      link:""
    },
    {
      icon:<i className="ri-terminal-box-fill"></i>,
      link:"/personal-info"
    },
    {
      icon:<i className="ri-gamepad-fill"></i>,
      link:"/hobbies"
    }
  ]
  return (
      <nav className="w-full lg:w-12 h-fit lg:h-full lg:border-r-2 border-r-lines justify-around lg:justify-start border-y-2 border-lines lg:border-y-0 lg:items-center flex flex-row lg:flex-col">
        {icons.map((icon,index)=> <AboutIcon key={index} icon={icon.icon} link={icon.link}/>)}
      </nav>
  )
    

  
    
}

export default AboutNav
