import React,{useState} from 'react'

import Link from "next/link"

export const PersonalInfoNav = ({files,handleChangeEditor}) => {
  const text = "Lorem"
  const [personalInfo, setPersonalInfo] = useState(true)
  const [contact, setContact] = useState(true)
  const [interest, setInterest] = useState(true)
  const [education, setEducation] = useState(true)

  const interestPages = files.filter(file=>file.folderName=="Interest")[0]
  const schoolPages = files.filter(file=> file.folderName=="School")[0]

  const handlePersonalInfo = () => {
    setPersonalInfo(prevState =>!prevState)
  }
  const handleContact = () => {
    setContact(prevState =>!prevState)
  }
  const handleInterest = () => {
    setInterest(prevState =>!prevState)
  }
  const handleEducation = () => {
    setEducation(prevState =>!prevState)
  }


  const extraStyle = {
      personalInfoStyle: personalInfo?"h-fit opacity-100 py-4 border-t-2 border-t-lines":"h-0 opacity-0 py-0",
      contactStyle: contact?"h-fit opacity-100 py-4":"h-0 opacity-0 py-0",
      interestStyle: interest?"h-fit opacity-100 mt-1":"h-0 opacity-0 py-0",
      educationStyle: education?"h-fit opacity-100 mt-1":"h-0 opacity-0 py-0"

  }

  return (
    <>
        <div onClick={handlePersonalInfo} className=" text-secondary hover:text-white cursor-pointer text-xs py-2 h-fit w-full flex justify-start">
            {
                personalInfo?<i className="ri-arrow-down-s-fill ml-2"></i>:<i className="ri-arrow-right-s-fill ml-2"></i>
            }
            <h1 className="ml-2">personal-info</h1>
        </div>
        <div className={`${extraStyle.personalInfoStyle} space-y-2`}>
            <div 
                onClick={
                    ()=>handleChangeEditor({title:"bio",text:text})
                } 
                className="text-secondary text-xs hover:text-white cursor-pointer flex items-center ml-[26px] space-x-1">
                <i className="ri-markdown-fill"></i>
                <span>bio</span>   
            </div>
            <div className="text-secondary text-xs">
                <div onClick={handleInterest} className="hover:text-white cursor-pointer text-secondary text-xs flex items-center space-x-1">
                    {
                        interest?<i className="text-sm ri-arrow-down-s-line ml-2"></i>:<i className="text-sm ri-arrow-right-s-line ml-2"></i>
                    }
                    <i className="text-accent-green ri-folder-fill inline-block"></i>
                    <span>interests</span>
                </div>
                <div className={`${extraStyle.interestStyle} text-secondary text-xs ml-[26px] space-y-1`}>
                    {
                        interestPages.pages.map((page,index)=>{
                            return <p key={index} onClick={()=>handleChangeEditor(page)} className="hover:text-white cursor-pointer flex items-center space-x-2"><i className="ri-markdown-fill"></i><span>{page.title}</span></p>
                        })
                    }
                   
                </div>
            </div>
            <div className="text-secondary text-xs">
                <div onClick={handleEducation} className="hover:text-white cursor-pointer text-secondary text-xs flex items-center space-x-1">
                    {
                        education?<i className="text-sm ri-arrow-down-s-line ml-2"></i>:<i className="text-sm ri-arrow-right-s-line ml-2"></i>
                    }
                    <i className="text-secondary-purple ri-folder-fill inline-block "></i>
                    <span>education</span>
                </div>
                <div className={`${extraStyle.educationStyle} text-secondary text-xs ml-[26px] space-y-1`}>
                {
                        schoolPages.pages.map((page,index)=>{
                            return <p key={index} onClick={()=>handleChangeEditor(page)} className="hover:text-white cursor-pointer flex items-center space-x-2"><i className="ri-markdown-fill"></i><span>{page.title}</span></p>
                        })
                    }
                </div>
            </div>
        </div>
        <div onClick={handleContact} className="cursor-pointer text-secondary hover:text-white text-xs py-2 h-fit w-full flex justify-start border-y-2 border-y-lines">
            {
                contact?<i className="ri-arrow-down-s-fill ml-2"></i>:<i className="ri-arrow-right-s-fill ml-2"></i>
            }
            <h1 className="ml-2">contacts</h1>
        </div>
        <div className={` ${extraStyle.contactStyle} space-y-2`}>
            <div className="text-secondary text-xs flex items-center space-x-1">
                <i className="ri-mail-fill inline-block ml-2"></i>
                <Link href="/contact-me">                
                    <a className="text-[10px]">info@josephenoch.com</a> 
                </Link>
            </div>
        </div>
    </>
  )
}
