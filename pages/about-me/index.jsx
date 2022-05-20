import React from 'react'

import { AboutLayout } from '../../Layouts/AboutMeLayout/AboutLayout'

import { PersonalInfoNav } from '../../components/AboutMe/PersonalInfoNav'
import { LeftContent } from '../../components/AboutMe/LeftContent'
import { RightContent } from '../../Components/AboutMe/RightContent'

const index = () => {
  
  return (
    <>
      <div className="w-40 h-full border-r-2 border-r-lines">
        <PersonalInfoNav/>
      </div>
      <div className="w-[41.4%] h-full text-secondary text-xs border-r-lines">
        <LeftContent/>
      </div>
      <div className="w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
            <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">

            </div>
      </div>
      <div className="w-[41.4%] h-full border-l-2 border-lines">
        <div className="h-full border-r-2 border-t-2 border-lines mt-8 py-5 px-7  overflow-y-auto scrollbar text-secondary text-sm">
          {"// Code Snippet showcase"}
          <RightContent/>
        </div>
      </div>
      <div className="w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
            <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
              
            </div>
      </div>
    </>
    )
}

index.Layout = AboutLayout

export default index