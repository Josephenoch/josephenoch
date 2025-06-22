import React, { ChangeEvent, FC, FormEvent, useCallback, useEffect, useMemo, useState, MutableRefObject, MouseEvent } from 'react'
import Head from 'next/head'
import Nav from '../components/Contact/Nav'
import LeftContent from '../components/Contact/LeftContent'
import RightContent from '../components/Contact/RightContent'
import {collection, addDoc} from "firebase/firestore"
import { db } from '../firebase-config'
import { CircleSpinner } from 'react-spinners-kit'
import ErrorModal from "../components/GeneralComponents/ErrorModal"
import formatDate from '../helpers/formatDate'
import MessageSent from '../components/Contact/MessageSent'
import TabTitle from '../components/GeneralComponents/TabTitle'
import { IError } from '../interfaces/GeneralComponent'
import { IMessage } from '../interfaces/GeneralComponent'
import { sendMessageEmail } from '../requests/email.request'

const ContactMe:FC = () => {
  const date = useMemo<string>(()=>formatDate(new Date()),[])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null|IError>(null)
  const [sent, setSent] = useState(false)
  const [data,setData] = useState({
    name: "",
    email: "",
    message: ""
  } as IMessage)
  
  const handleChange =useCallback(
    (e:ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target

    setData(prevState=>{
     return {...prevState,[name]:value}
    })
  },[])


  const sendData = async() =>{
    setLoading(()=>true)
    try{
      const docRef = collection(db, "messages")
      const resp = await addDoc(docRef,{...data, date})
      await sendMessageEmail({
        sentTime: date,
        message: data.message,
        senderName: data.name,
        senderEmail: data.email
      })
      if(!resp.id){
        setError(()=>{return {error:"error sending message"}})
        setLoading(()=>false)
        setSent(()=>false)
        return false
      }
    }catch(err){
      console.log(err)
      setError(()=>{return {error:"error sending message"}})
    }
    
    setLoading(()=>false)
    setSent(()=>true)
  }


  const handleSubmit =async(e:MouseEvent<HTMLButtonElement>,formRef:MutableRefObject<HTMLFormElement>) =>{
    e.preventDefault()
    if(formRef.current.checkValidity()){
      await sendData()
      return
    }
    setError(()=>{return {error:"Please put in the correct details"}})
  }


  const handleNewMessage = () =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(()=>false)
      setData(()=>{return {}as IMessage })
      setSent(()=>false)
    } ,300)
  }
  const style = {
    activeStyle :"!pr-20 !pl-6 !py-2"
  }
  return (
    <div className="h-full overflow-auto scrollbar-y lg:overflow-hidden flex lg:flex-row flex-col min-w-full">  
      <Head>
        <title>Joseph Enoch | Contact</title>
      </Head>
      <Nav/>
      {error&&<ErrorModal retry={()=>setError(null)} close={()=>setError(null)} error={error}/>}
      <div className="h-full lg:overflow-hidden w-full">
        <div className="hidden min-h-[33.6px] border-b-2 border-lines  overflow-x-auto scrollbar-x lg:flex flex-nowrap">
          <TabTitle title="Contact" styles={style}/>
        </div>
        <div className="h-full pb-8 flex">
          <div className="w-full lg:w-1/2 overflow-auto scrollbar-y h-full lg:border-r-2 border-r-lines">
            {loading?
            <div className="flex lg:items-center mt-10 lg:mt-0 justify-center h-full">
              <CircleSpinner color="#4D5BCE" loading={loading}/>
            </div>:
            sent?
            <div className="flex items-center mt-10 lg:mt-0 lg:justify-center h-full flex-col">
                <MessageSent handleNewMessage={handleNewMessage}/>
            </div>:
            <LeftContent values={data} handleChange={handleChange} handleSubmit={handleSubmit}/>}
          </div>
          <RightContent values={data}/>
        </div>
      </div>
      
    </div>
  )
}
export default ContactMe