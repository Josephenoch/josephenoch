import React from 'react'

const TabTitle = ({handleChangeEditor, page, title, closeAble, closeEditor,styles}) => {
  return (
    <div  className="inline-flex items-center border-r-2 text-xs border-lines">
        <span  onClick={()=>handleChangeEditor&&handleChangeEditor(page)} className={`$ cursor-pointer inline-block pr-2 pl-6 py-2 capitalize overflow-hidden text-ellipsis whitespace-nowrap ${styles?.activeStyle}`}>{title}</span>
        {closeAble&&<span onClick={()=>closeEditor(page)} className=" cursor-pointer w-4 h-4 inline-flex mr-2 items-center bg-gray-50/10 justify-center rounded-full"><i className="ri-close-line"></i></span>}
    </div>
  )
}

export default TabTitle