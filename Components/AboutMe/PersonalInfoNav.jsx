import React from 'react'

import Link from "next/link"

export const PersonalInfoNav = () => {
  return (
    <>
        <div className="text-xs py-2 h-fit w-full flex justify-start border-b-2 border-b-lines">
            <i className="ri-arrow-down-s-fill ml-2"></i>
            <h1 className="ml-2">personal-info</h1>
        </div>
        <div className="py-4 space-y-2 border-b-lines border-b-2">
            <div className="text-secondary text-xs flex items-center space-x-1">
                <i className=" text-sm ri-arrow-right-s-line ml-2"></i>
                <i className="text-accent-orange ri-folder-fill inline-block"></i>
                <span>bio</span>
            </div>
            <div className="text-secondary text-xs flex items-center space-x-1">
                <i className="text-sm ri-arrow-right-s-line ml-2"></i>
                <i className="text-accent-green ri-folder-fill inline-block"></i>
                <span>interests</span>
            </div>
            <div className="text-secondary text-xs flex items-center space-x-1">
                <i className="text-sm ri-arrow-right-s-line ml-2"></i>
                <i className="text-secondary-purple ri-folder-fill inline-block "></i>
                <span>education</span>
            </div>
        </div>
        <div className="text-xs py-2 h-fit w-full flex justify-start border-b-2 border-b-lines">
            <i className="ri-arrow-down-s-fill ml-2"></i>
            <h1 className="ml-2">contacts</h1>
        </div>
        <div className="py-4 space-y-2">
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
