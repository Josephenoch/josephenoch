import Link from 'next/link'
import React from 'react'

export const SocialIcon = ({icon, link}) => {

  return (
    <>
      <a target="_blank" href={link}className={"hover:text-white text-secondary inline-block px-3  py-3 border-r-2 border-r-lines hover:border-b-accent border-b-primary-lighter transition border-b-2"}>
        {icon}
      </a>
    </>
  )
}
