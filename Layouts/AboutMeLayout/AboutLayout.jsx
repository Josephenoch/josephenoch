import React from 'react'
import { AboutNav } from './AboutNav'

export const AboutLayout = ({children}) => {
  return (
    <div className="h-full flex overflow-hidden">
      <div className="w-12 h-full border-r-2 border-r-lines items-center flex flex-col">
        <AboutNav/>
      </div>
      {children}
    </div>
  )
}
