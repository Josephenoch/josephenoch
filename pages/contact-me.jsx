import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Nav from '../Components/Contact/Nav'
import LeftContent from '../Components/Contact/LeftContent'
import RightContent from '../Components/Contact/RightContent'
import {collection, addDoc} from "firebase/firestore"
import { db } from '../firebase-config'
import { CircleSpinner } from 'react-spinners-kit'
import ErrorModal from "../Components/GeneralComponents/ErrorModal"
import formatDate from '../Helpers/formatDate'
import Button from '../Components/GeneralComponents/Button'
const ContactMe = () => {
  const date = useMemo(()=>formatDate(new Date()),[])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [sent, setSent] = useState(false)
  const [values,setValues] = useState({
    name:"",
    email:"",
    message:"",
    date:date
  })
  const handleChange =useCallback(
    (e) =>{
    const eventName = e.target.name
    const eventValue = e.target.value

    setValues(prevState=>{
     return {...prevState,[eventName]:eventValue}
    })
  },[])
  const sendData = async() =>{
    
    setLoading(true)
    const docRef = collection(db, "messages")
    const data = await addDoc(docRef,values)
    if(!data.id){
      setError({error:"error sending message"})
      setLoading(false)
      setSent(false)
      return false
    }
    setLoading(false)
    setSent(true)
  }
  const handleSubmit =useCallback(async(e,formRef) =>{
    e.preventDefault()
    if(formRef.current.checkValidity()){
      await sendData()
      return true
    }
    setError({error:"Please put in the correct details"})
  },[])
  const handleNewMessage = () =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      setValues({
        name:"",
        email:"",
        message:"",
        date:date
      })
      setSent(false)
    } ,300)
  }
  return (
    <div className="h-full overflow-hidden flex min-w-full">  
      <Head>
        <title>Joseph Enoch | Contact</title>
      </Head>
      <Nav/>
      {error&&<ErrorModal retry={()=>setError(null)} close={()=>setError(null)} error={error}/>}
      <div className="h-full overflow-hidden w-full">
        <div className=" min-h-[33.6px] border-b-2 border-lines  overflow-x-auto scrollbar-x flex flex-nowrap">
            <span className="cursor-pointer inline-block border-r-2 text-xs border-r-lines pr-20 pl-6 py-2 capitalize overflow-hidden text-ellipsis whitespace-nowrap">contact</span>
        </div>
        <div className="h-full pb-8 flex">
          <div className=" w-1/2 overflow-auto scrollbar-y h-full border-r-2 border-r-lines">
            {loading?
            <div className="flex items-center justify-center h-full">
              <CircleSpinner color="#4D5BCE" loading={loading}/>
            </div>:
            sent?
            <div  className="flex  items-center justify-center h-full flex-col">
                <p className="text-lg">Thank you! &#x1F918;</p>
                <p className="w-1/2 mt-2 text-sm text-secondary text-center">Your message has been accepted. You will recieve answer really soon!</p>
                <Button onClick={handleNewMessage} >send-new-message</Button>
            </div>:
            <LeftContent handleChange={handleChange} handleSubmit={handleSubmit}/>}
          </div>
          <RightContent values={values}/>
        </div>
      </div>
      
    </div>
  )
}

export default ContactMe