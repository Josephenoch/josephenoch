import React,{useState} from 'react'


const ProfessionalInfoNav = ({files,handleChangeEditor}) => {
  const text = "Lorem"
  const [personalInfo, setPersonalInfo] = useState(true)
  const [interest, setInterest] = useState(true)
  const [educationExperience, setEducationExperience] = useState(true)

  const interestPages = files.filter(file=>file.folderName=="leadership")[0]
  const schoolPages = files.filter(file=> file.folderName=="work")[0]

  const handleProfessonalInfo = () => {
    setPersonalInfo(prevState =>!prevState)
  }

  const handleInterest = () => {
    setInterest(prevState =>!prevState)
  }
  const handleEducation = () => {
    setEducationExperience(prevState =>!prevState)
  }


  const extraStyle = {
      professonalInfoStyle: personalInfo?"h-fit opacity-100 py-4":"h-0 opacity-0 py-0",
      interestStyle: interest?"h-fit opacity-100 mt-1":"h-0 opacity-0 py-0",
      educationExperienceStyle: educationExperience?"h-fit opacity-100 mt-1":"h-0 opacity-0 py-0"

  }

  return (
    <>
        <div onClick={handleProfessonalInfo} className=" text-secondary border-b-2 border-lines hover:text-white cursor-pointer text-xs py-2 h-fit w-full flex justify-start">
            {
                personalInfo?<i className="ri-arrow-down-s-fill ml-2"></i>:<i className="ri-arrow-right-s-fill ml-2"></i>
            }
            <h1 className="ml-2">professional-info</h1>
        </div>
        <div className={`${extraStyle.professonalInfoStyle} space-y-2`}>
            
            <div className="text-secondary text-xs">
                <div onClick={handleInterest} className="hover:text-white cursor-pointer text-secondary text-xs flex items-center space-x-1">
                    {
                        interest?<i className="text-sm ri-arrow-down-s-line ml-2"></i>:<i className="text-sm ri-arrow-right-s-line ml-2 overflow-hidden text-ellipsis"></i>
                    }
                    <i className="text-accent-green ri-folder-fill inline-block"></i>
                    <span className="capitalize">{interestPages.folderName}</span>
                </div>
                <div className={`${extraStyle.interestStyle} text-secondary text-xs ml-[26px] space-y-1`}>
                    {
                        interestPages.pages.map((page,index)=>{
                            return <p key={index} onClick={()=>handleChangeEditor(page)} className="hover:text-white cursor-pointer flex items-center space-x-2 overflow-hidden text-ellipsis"><i className="ri-markdown-fill"></i><span>{page.title}</span></p>
                        })
                    }
                   
                </div>
            </div>
            <div className="text-secondary text-xs">
                <div onClick={handleEducation} className="hover:text-white cursor-pointer text-secondary text-xs flex items-center space-x-1">
                    {
                        educationExperience?<i className="text-sm ri-arrow-down-s-line ml-2"></i>:<i className="text-sm ri-arrow-right-s-line ml-2 overflow-hidden text-ellipsis"></i>
                    }
                    <i className="text-secondary-purple ri-folder-fill inline-block "></i>
                    <span className="capitalize">{schoolPages.folderName}</span>
                </div>
                <div className={`${extraStyle.educationExperienceStyle} text-secondary text-xs ml-[26px] space-y-1`}>
                {
                        schoolPages.pages.map((page,index)=>{
                            return <p key={index} onClick={()=>handleChangeEditor(page)} className="w-28 hover:text-white cursor-pointer flex items-center space-x-2 overflow-hidden text-ellipsis whitespace-nowrap"><i className="ri-markdown-fill"></i><span>{page.title}</span></p>
                        })
                    }
                </div>
            </div>
        </div>
        
    </>
  )
}

export default ProfessionalInfoNav