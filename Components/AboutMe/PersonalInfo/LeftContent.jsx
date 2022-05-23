import React,{useState} from 'react'


const LeftContent = ({openEditor}) => {
  
  return (
    <>
     <div className="inline-flex px-3 items-center border-r-2 py-2  border-lines">
          <span className='inline-block mr-10'>personal-info</span>
          <i className="ri-close-line"></i>
      </div>
      <div className="pl-12 pr-10 border-t-2 border-r-2 border-lines pt-5 h-full overflow-y-auto scrollbar pb-10">
        {openEditor}
      </div>
    </>
  )
}

export default LeftContent