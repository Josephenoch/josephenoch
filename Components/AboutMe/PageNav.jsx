import React,{useEffect, useState} from 'react'

import Link from "next/link"

import { CircleSpinner } from "react-spinners-kit";
import DropDown from '../GeneralComponents/DropDown';

const PageNav = ({files,handleChangeEditor, pageTitle,loading}) => {
  const [folders, setFolders] = useState([])
  const folderColors = ["text-accent-green","text-accent","text-secondary-purple"]
  useEffect(()=>{
    const folders = files?.filter(file=> file.folderName !== "none").map(file=> {return {folderName:file.folderName,active:true}})
    setFolders(folders)
  },[files])
  const [page, setPage] = useState(true)
  const [contact, setContact] = useState(true)

  const handlePage = () => {
    setPage(prevState =>!prevState)
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
      pageTitle: page?"h-fit opacity-100 ":"h-0 opacity-0 py-0",
      contactStyle: contact?"h-fit opacity-100 py-4":"h-0 opacity-0 py-0",
  }

  return (
    <>
        <DropDown name={pageTitle}>
            {/* {loading?<div className="flex justify-center py-10"><CircleSpinner size={15} color="#4D5BCE" loading={loading} /></div>:*/<div className={`${extraStyle.pageTitle} space-y-2`}> 
                {files?.map((file,index)=>{
                    if(file.folderName==="none"){
                        return( 
                        file.pages.map(fil=>
                        <p
                                key={fil.title}
                                onClick={
                                    ()=>handleChangeEditor(fil)
                                } 
                                className="text-secondary text-xs hover:text-white cursor-pointer flex items-center ml-[26px] space-x-2">
                                <i className="ri-markdown-fill"></i>
                                <span className="overflow-hidden capitalize text-ellipsis whitespace-nowrap">{fil.title}</span>   
                            </p>
                        ))
                    }
                    else{
                        const itemId = folders?.findIndex(drop=>drop.folderName===file.folderName)
                        return (
                        <div key={file.folderName} className="text-secondary text-xs">
                            <div onClick={()=>handleFolder(file.folderName)} className="hover:text-white cursor-pointer text-secondary text-xs flex items-center space-x-1">
                                {
                                    folders[itemId]?.active?<i className="text-sm ri-arrow-down-s-line ml-2"></i>:<i className="text-sm ri-arrow-right-s-line ml-2"></i>
                                }
                                <i className={`${folderColors[index%3]} ri-folder-fill inline-block`}></i>
                                <span className="capitalize">{file.folderName}</span>
                            </div>
                            <div className={`${folders[itemId]?.active?"block mt-1":"hidden"} text-secondary text-xs ml-[26px] space-y-1`}>
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
            </div>}
        </DropDown>
        <DropDown name="contacts" sx={"hidden lg:flex"}>
            <div className={` ${extraStyle.contactStyle} space-y-2`}>
                <div className="text-secondary text-xs flex items-center space-x-1">
                    <i className="ri-mail-fill inline-block ml-2"></i>
                    <Link href="/contact-me">                
                        <a className="text-[10px]">info@josephenoch.com</a> 
                    </Link>
                </div>
            </div>
        </DropDown>
    </>
  )
}

export default PageNav