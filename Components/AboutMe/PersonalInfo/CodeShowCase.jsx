import React from 'react'

export const CodeShowCase = ({children}) => {
  return (
    <div className="text-xs space-y-2 pb-10">
        
        <div className="flex justify-between">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-500 "></div>
                <div>
                    <a href="https://github.com/josephenoch" rel="noreferrer" target="_blank" className="text-secondary-purple font-bold">@josephenoch</a>
                    <p>Created 5 months ago</p>
                </div>
            </div>
            <div className="space-x-4">
                <span><i className="ri-chat-smile-3-fill"></i> details</span>
                <span><i className="ri-star-fill"></i> 3 stars</span>
            </div>
        </div>
        <div className='w-full flex rounded-2xl h-content border-[0.5px] border-lines bg-primary-light'>   
            {children}
        </div>
    </div>
  )
}
