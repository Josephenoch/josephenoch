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
    contact:contact?"text-white border-y-2 border-y-lines lg:border-t-0":"border-t-2 border-t-lines text-secondary",
    findMe:findMe?"text-white":"text-secondary",
    contactDropDown: contact?"h-fit opacity-100 py-4":"h-0 opacity-0 hidden lg:block py-0",
    findMeDropDown: findMe?"h-fit opacity-100 py-4":"h-0 opacity-0 hidden lg:block py-0",

}
  return (
    <nav className="min-w-[13rem] lg:h-full lg:border-r-2 border-r-lines">
        <div onClick={handleContact} className={`${extraStyle.contact} bg-secondary text-white lg:bg-inherit lg:text-inherit cursor-pointer hover:text-white text-xs py-2 h-fit w-full flex justify-start `}>
            {
                contact?<i className="ri-arrow-down-s-fill lg:ml-2 ml-8"></i>:<i className="ri-arrow-right-s-fill lg:ml-2 ml-8"></i>
            }
            <h1 className="ml-2">contacts</h1>
        </div>
        <div className={` ${extraStyle.contactDropDown} space-y-2`}>
            <Link href="/contact-me"> 
            <a className="text-secondary text-xs flex hover:text-white items-center space-x-1">
                <i className="ri-mail-fill ml-8 lg:ml-2"></i>
                <span className="text-[10px] inline-block">info@josephenoch.com</span> 
                
            </a>
            </Link>
            <a href="#" target="_blank" rel="nonreferrer" className="hover:text-white text-secondary text-xs flex items-center space-x-1">
                <i className="ri-discord-fill inline-block ml-8 lg:ml-2"></i>
                <span className="text-[10px] inline ">Join The Tech Cartel</span> 
            </a >
        </div>
        <div onClick={handleFindMe} className={`${extraStyle.findMe} cursor-pointer hover:text-white text-xs py-2 h-fit w-full flex bg-secondary text-white lg:bg-inherit lg:text-inherit justify-start border-y-2 border-y-lines`}>
            {
                findMe?<i className="ri-arrow-down-s-fill lg:ml-2 ml-8"></i>:<i className="ri-arrow-right-s-fill lg:ml-2 ml-8"></i>
            }
            <h1 className="ml-2">find-me-also-on</h1>
        </div>
        <div className={` ${extraStyle.findMeDropDown} space-y-2`}>
            <a target="_blank" tel="nonreferrer" href="#" className="text-secondary hover:text-white  text-sm flex items-center space-x-1">
                <i className="ri-external-link-line inline-block ml-8 lg:ml-2"></i>
                <span className="text-[10px]" >Dev.to Profile</span> 
            </a>
            <a target="_blank" tel="nonreferrer" href="#" className="text-secondary hover:text-white text-sm flex items-center space-x-1">
                <i className="ri-external-link-line inline-block ml-8 lg:ml-2"></i>
                <span className="text-[10px]">Medium Profile</span> 
            </a >
            <a target="_blank" tel="nonreferrer" href="#" className="text-secondary hover:text-white text-sm flex items-center space-x-1">
                <i className="ri-external-link-line inline-block ml-8 lg:ml-2"></i>
                <span className="text-[10px]" >ADA Profile</span> 
            </a>
            <a target="_blank" tel="nonreferrer" href="#" className="text-secondary hover:text-white text-sm flex items-center space-x-1">
                <i className="ri-external-link-line inline-block ml-8 lg:ml-2"></i>
                <span className="text-[10px]" >Medium Account</span> 
            </a>
        </div>
    </nav>
  )
}

export default Nav