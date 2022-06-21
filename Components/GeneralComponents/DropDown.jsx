import React,{useState} from 'react'

const DropDown = ({name,children, last}) => {
  const [dropDown, setDropDown] = useState(false)
  const style = {
    dropDown:dropDown?"text-white":"text-secondary",
    dropDownContent: dropDown?"h-fit opacity-100 py-4":"h-0 opacity-0 hidden lg:block py-0",

}
  return (
    <>
        <div onClick={()=>setDropDown(prevState=>!prevState)} className={`${style.dropDown} hover:text-white cursor-pointer lg:bg-inherit lg: text-white bg-secondary py-2 lowercase border-b-2 text-xs border-lines  h-fit w-full flex justify-start`}>
            {
                dropDown?<i className="ri-arrow-down-s-fill lg:ml-2 ml-8"></i>:<i className="ri-arrow-right-s-fill lg:ml-2 ml-8"></i>
            }
            <h1 className="ml-2">{name}</h1>
        </div>
        <div className={` ${style.dropDownContent} space-y-2`}>
            {children}
        </div>
    </>
  )
}

export default DropDown