import React,{useState} from 'react'

import Link from "next/link"

const PageNav = ({files,handleChangeEditor, pageTitle}) => {
  const folderColors = ["text-accent-green","text-accent","text-secondary-purple"]
  const dd = files.filter(file=> file.folderName !== "none").map(file=> {return {folderName:file.folderName,active:false}})
  const [folders, setFolders] = useState(dd)
  const [personalInfo, setPersonalInfo] = useState(true)
  const [contact, setContact] = useState(true)

  const handlePersonalInfo = () => {
    setPersonalInfo(prevState =>!prevState)
  }
  const handleContact = () => {
    setContact(prevState =>!prevState)
  }
  const handleFolder = (name) => {
    
    setFolders(prevState =>{
        const newDropdowns = [...prevState]
        const itemId = prevState.findIndex(item=>item.folderName===name)
        newDropdowns[itemId] = {...newDropdowns[itemId],active:!prevState[itemId].active}
        return [...newDropdowns]
    })
  }


  const extraStyle = {
      pageTitle: personalInfo?"h-fit opacity-100 py-4 border-t-2 border-t-lines":"h-0 opacity-0 py-0",
      contactStyle: contact?"h-fit opacity-100 py-4":"h-0 opacity-0 py-0",
  }

  return (
    <>
        <div onClick={handlePersonalInfo} className=" text-secondary hover:text-white cursor-pointer text-xs py-2 h-fit w-full flex justify-start">
            {
                pageTitle?<i className="ri-arrow-down-s-fill ml-2"></i>:<i className="ri-arrow-right-s-fill ml-2"></i>
            }
            <h1 className="ml-2">{pageTitle}</h1>
        </div>
        <div className={`${extraStyle.pageTitle} space-y-2`}>
            {files.map((file,index)=>{
                if(file.folderName==="none"){
                    return( 
                    file.pages.map(fil=>
                       <div 
                            key={fil.title}
                            onClick={
                                ()=>handleChangeEditor(fil)
                            } 
                            className="text-secondary text-xs hover:text-white cursor-pointer flex items-center ml-[26px] space-x-1">
                            <i className="ri-markdown-fill"></i>
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">{fil.title}</span>   
                        </div>
                    ))
                }
                else{
                    const itemId = folders.findIndex(drop=>drop.folderName===file.folderName)
                    return (
                    <div key={file.folderName} className="text-secondary text-xs">
                        <div onClick={()=>handleFolder(file.folderName)} className="hover:text-white cursor-pointer text-secondary text-xs flex items-center space-x-1">
                            {
                                folders[itemId].active?<i className="text-sm ri-arrow-down-s-line ml-2"></i>:<i className="text-sm ri-arrow-right-s-line ml-2"></i>
                            }
                            <i className={`${folderColors[index%3]} ri-folder-fill inline-block`}></i>
                            <span className="capitalize">{file.folderName}</span>
                        </div>
                        <div className={`${folders[itemId].active?"h-fit opacity-100 mt-1":"h-0 opacity-0 py-0"} text-secondary text-xs ml-[26px] space-y-1`}>
                            {
                                file.pages.map((page,index)=>{
                                    return <p key={index} onClick={()=>handleChangeEditor(page)} className="hover:text-white cursor-pointer flex items-center space-x-2"><i className="ri-markdown-fill"></i><span className="overflow-hidden text-ellipsis whitespace-nowrap capitalize">{page.title}</span>   
                                    </p>
                                })
                            }
                        
                    </div>
                </div>
                )
            }
            })}
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

export default PageNav