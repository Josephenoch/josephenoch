import React, { useCallback, useState } from 'react'
import Head from 'next/head'
import Nav from '../Components/Contact/Nav'
import LeftContent from '../Components/Contact/LeftContent'
import RightContent from '../Components/Contact/RightContent'

const ContactMe = () => {
  const [values,setValues] = useState({
    name:"",
    email:"",
    message:""
  })
  const handleChange =useCallback(
    (e) =>{
    const eventName = e.target.name
    const eventValue = e.target.value

    setValues(prevState=>{
     return {...prevState,[eventName]:eventValue}
    })
  },[])
  return (
    <div className="h-full overflow-hidden flex min-w-full">  
      <Head>
        <title>Joseph Enoch | Contact</title>
      </Head>
      <Nav/>
      <div className="h-full overflow-hidden w-full">
        <div className=" min-h-[33.6px] border-b-2 border-lines  overflow-x-auto scrollbar-x flex flex-nowrap">
            <span className="cursor-pointer inline-block border-r-2 text-xs border-r-lines pr-20 pl-6 py-2 capitalize overflow-hidden text-ellipsis whitespace-nowrap">contact</span>
        </div>
        <div className="h-full flex">
          <LeftContent handleChange={handleChange} />
          <RightContent values={values}/>
        </div>
      </div>
      
    </div>
  )
}

export default ContactMe