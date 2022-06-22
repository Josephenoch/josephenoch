import React, { useState } from 'react'
import Link from "next/link"
import DropDown from "../GeneralComponents/DropDown"
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
        <DropDown name="contact" first>
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
        </DropDown>
        <DropDown name="find-me-also-on">
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
        </DropDown>
        <DropDown name="find-me-also-on">
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
        </DropDown>
    </nav>
  )
}

export default Nav