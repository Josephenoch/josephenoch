import React from 'react'
import { AboutNav } from '../../components/AboutMe/AboutNav'

import { PersonalInfoNav } from '../../components/AboutMe/PersonalInfoNav'
export const Layout = () => {
  return (
    <div className="h-full flex">
      <div className="w-12 h-full border-r-2 border-r-lines items-center flex flex-col">
        <AboutNav/>
        
      </div>
      <div className="w-40 h-full border-r-2 border-r-lines">
        <PersonalInfoNav/>
      </div>
      <div className="w-[41.4%] h-full border-r-2 border-r-lines">
        hi
      </div>
      <div className="w-4 h-full mx-1 border-t-[6px] border-t-secondary">

      </div>
      <div className="w-[41.4%] h-full border-x-2 border-x-lines">
        hi
      </div>
      <div className="w-4 h-full mx-1 border-t-[6px] border-t-secondary">

      </div>
    </div>
  )
}
