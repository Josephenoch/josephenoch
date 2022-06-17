import React, { useState } from 'react'
import Link from "next/link"
const Nav = () => {
  const [contact, setContact] = useState(true)
  const [findMe, setFindMe] = useState(true)

  const handleContact = () => {
    setContact(prevState=>!prevState)
  }
  const handleFindMe = () =>{
    setFindMe(prevState=>!prevState)
  }
  const extraStyle = {
    contact:contact?"text-white border-b-2 border-b-lines":"text-secondary",
    findMe:findMe?"text-white":"text-secondary",
    contactDropDown: contact?"h-fit opacity-100 py-4":"h-0 opacity-0 py-0",
    findMeDropDown: findMe?"h-fit opacity-100 py-4":"h-0 opacity-0 py-0",

}
  return (
    <nav className="w-[13rem] h-full border-r-2 border-r-lines">
        <div onClick={handleContact} className={`${extraStyle.contact} cursor-pointer  hover:text-white text-xs py-2 h-fit w-full flex justify-start `}>
            {
                contact?<i className="ri-arrow-down-s-fill ml-2"></i>:<i className="ri-arrow-right-s-fill ml-2"></i>
            }
            <h1 className="ml-2">contacts</h1>
        </div>
        <div className={` ${extraStyle.contactDropDown} space-y-2`}>
            <div className="text-secondary text-xs flex items-center space-x-1">
                <i className="ri-mail-fill inline-block ml-2"></i>
                <Link href="/contact-me">                
                    <a className="text-[10px]">info@josephenoch.com</a> 
                </Link>
            </div>
            <div className="text-secondary text-xs flex items-center space-x-1">
                <i className="ri-discord-fill inline-block ml-2"></i>
                <a className="text-[10px]" href="">Join The Tech Cartel</a> 
            </div>
        </div>
        <div onClick={handleFindMe} className={`${extraStyle.findMe} cursor-pointer hover:text-white text-xs py-2 h-fit w-full flex justify-start border-y-2 border-y-lines`}>
            {
                findMe?<i className="ri-arrow-down-s-fill ml-2"></i>:<i className="ri-arrow-right-s-fill ml-2"></i>
            }
            <h1 className="ml-2">find-me-also-on</h1>
        </div>
        <div className={` ${extraStyle.findMeDropDown} space-y-2`}>
            <div className="text-secondary hover:text-white  text-sm flex items-center space-x-1">
                <i className="ri-external-link-line inline-block ml-2"></i>
                <a className="text-[10px]" target="_blank" rel="nonreferrer"href="#">Dev.to Profile</a> 
            </div>
            <div className="text-secondary hover:text-white text-sm flex items-center space-x-1">
                <i className="ri-external-link-line inline-block ml-2"></i>
                <a className="text-[10px]" target="_blank" rel="nonreferrer"href="#">Medium Profile</a> 
            </div>
            <div className="text-secondary hover:text-white text-sm flex items-center space-x-1">
                <i className="ri-external-link-line inline-block ml-2"></i>
                <a className="text-[10px]" target="_blank" rel="nonreferrer"href="#">ADA Profile</a> 
            </div>
            <div className="text-secondary hover:text-white text-sm flex items-center space-x-1">
                <i className="ri-external-link-line inline-block ml-2"></i>
                <a className="text-[10px]" target="_blank" rel="nonreferrer"href="#">Medium Account</a> 
            </div>
        </div>
    </nav>
  )
}

export default Nav