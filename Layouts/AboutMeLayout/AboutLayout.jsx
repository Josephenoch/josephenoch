import React from 'react'
import AboutNav  from './AboutNav'

const AboutLayout = ({children}) => {
  return (
    <div className="h-full flex  overflow-clip">
      <div className="w-12 h-full border-r-2 border-r-lines items-center flex flex-col">
        <AboutNav/>
      </div>
      {children}
    </div>
  )
}
export default AboutLayout