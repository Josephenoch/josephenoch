import React from 'react'

export const CodeShowCase = ({Children}) => {
  return (
    <div className="text-xs space-y-2">
        
        <div className="flex justify-between">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-500 "></div>
                <div>
                    <p className="text-secondary-purple font-bold">@username</p>
                    <p>Created 5 months ago</p>
                </div>
            </div>
            <div className="space-x-4">
                <span><i className="ri-chat-smile-3-fill"></i> details</span>
                <span><i className="ri-star-fill"></i> 3 stars</span>
            </div>
        </div>
        <div className='w-full rounded-lg h-40 border-[0.5px] border-lines bg-primary-light'>   
            {Children}
        </div>
    </div>
  )
}
