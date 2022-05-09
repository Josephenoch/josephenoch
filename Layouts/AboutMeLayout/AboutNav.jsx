import React from 'react'
import { AboutIcon } from './AboutIcon'


export const AboutNav = () => {
  const icons = [
    {
      icon:<i className="ri-user-4-fill"></i>,
      link:"/"
    },
    {
      icon:<i className="ri-terminal-box-fill"></i>,
      link:"/professional-info"
    },
    {
      icon:<i className="ri-gamepad-fill"></i>,
      link:"/interests"
    }
  ]
  return icons.map((icon,index)=> <AboutIcon key={index} icon={icon.icon} link={icon.link}/>)
}
