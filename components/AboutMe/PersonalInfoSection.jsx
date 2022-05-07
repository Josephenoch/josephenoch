import React from 'react'

export const PersonalInfoSection = () => {
  return (
    <>
        <div className="text-xs py-2 h-fit w-full flex justify-start border-b-2 border-b-lines">
            <h1 className="ml-2">personal-info</h1>
        </div>
        <div className="py-4 space-y-2 border-b-lines border-b-2">
            <div className="text-xs flex items-center space-x-2">
                <i className="text-accent-orange ri-folder-fill inline-block ml-2"></i>
                <span>bio</span>
            </div>
            <div className="text-xs flex items-center">
                <i className="text-accent-green ri-folder-fill inline-block ml-2"></i>
            </div>
            <div className="text-xs flex items-center">
                <i className="text-accent ri-folder-fill inline-block ml-2"></i>
            </div>
            
        </div>
    </>
  )
}
