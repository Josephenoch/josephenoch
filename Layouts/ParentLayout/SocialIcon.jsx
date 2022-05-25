import React from 'react'

const SocialIcon = ({icon, link}) => {

  return (
    <>
      <a target="_blank" href={link} rel="noreferrer" className={"hover:text-white text-secondary inline-block px-3  py-3 border-r-2 border-r-lines hover:border-b-accent border-b-primary-lighter hover:transition-[border] ease-in-out border-b-2 duration-1000"}>
        {icon}
      </a>
    </>
  )
}
export default SocialIcon