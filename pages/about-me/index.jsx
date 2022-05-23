import React,{useState,useEffect} from 'react'

import { AboutLayout } from '../../Layouts/AboutMeLayout/AboutLayout'
import Bio from '../../Components/AboutMe/PersonalInfo/Bio'

import { PersonalInfoNav } from '../../Components/AboutMe/PersonalInfo/PersonalInfoNav'
import LeftContent  from '../../Components/AboutMe/PersonalInfo/LeftContent'
import RightContent from '../../Components/AboutMe/PersonalInfo/RightContent'

const Index = () => {
  const [openEditor, setOpenEditor] = useState(<Bio/>)
  const handleChangeEditor = (selected) =>{
    setOpenEditor(selected)
  }
  useEffect(() => {
    console.log(openEditor)
  }, [openEditor])
  
  return (
    <>
      <div className="w-40 h-full border-r-2 border-r-lines">
        <PersonalInfoNav handleChangeEditor={handleChangeEditor}/>
      </div>
      <div className="w-[41.4%] h-full text-secondary text-xs border-r-lines">
        <LeftContent  openEditor={openEditor}/>
      </div>
      <div className="w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
            <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">

            </div>
      </div>
      <div className="w-[41.4%] h-full border-l-2 border-lines">
        <div className="h-full border-r-2 border-t-2 border-lines mt-8 py-5 px-7  overflow-y-auto scrollbar text-secondary text-sm">
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

Index.Layout = AboutLayout

export default Index