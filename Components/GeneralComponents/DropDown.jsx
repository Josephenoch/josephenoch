import React,{useState} from 'react'

const DropDown = ({name,children, first}) => {
  const notFirst = !first
  const [dropDown, setDropDown] = useState(false)
  const style = {
    dropDown:dropDown?"text-white":"text-white lg:text-secondary ",
    otherDropDown:notFirst&&dropDown?"border-b-2":"",
    dropDownContent: dropDown?"h-fit opacity-100 py-4":"h-0 opacity-0 hidden py-0",
    // first:first?"":"border-t-2"

}
  return (
    <>
        <div onClick={()=>setDropDown(prevState=>!prevState)} className={`${style.dropDown} ${style.first} ${style.otherDropDown} hover:text-white cursor-pointer lg:bg-inherit lg: border-b-2  bg-secondary py-2 lowercase  text-xs border-lines  h-fit w-full flex justify-start`}>
            {
                dropDown?<i className="ri-arrow-down-s-fill lg:ml-2 ml-8"></i>:<i className="ri-arrow-right-s-fill lg:ml-2 ml-8"></i>
            }
            <h1 className="ml-2">{name}</h1>
        </div>
        <div className={` ${style.dropDownContent} border-b-2 border-b-lines space-y-2`}>
            {children}
        </div>
    </>
  )
}

export default DropDown