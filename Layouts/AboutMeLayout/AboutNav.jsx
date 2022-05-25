import React from 'react'
import AboutIcon from './AboutIcon'


const AboutNav = () => {
  const icons = [
    {
      icon:<i className="ri-user-4-fill"></i>,
      link:""
    },
    {
      icon:<i className="ri-terminal-box-fill"></i>,
      link:"professional-info"
    },
    {
      icon:<i className="ri-gamepad-fill"></i>,
      link:"hobbies"
    }
  ]
  return icons.map((icon,index)=> <AboutIcon key={index} icon={icon.icon} link={icon.link}/>)
}

export default AboutNav
