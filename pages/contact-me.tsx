import React, { ChangeEvent, FC, FormEvent, useCallback, useEffect, useMemo, useState, MutableRefObject } from 'react'
import Head from 'next/head'
import Nav from '../Components/Contact/Nav'
import LeftContent from '../Components/Contact/LeftContent'
import RightContent from '../Components/Contact/RightContent'
import {collection, addDoc} from "firebase/firestore"
import { db } from '../firebase-config'
import { CircleSpinner } from 'react-spinners-kit'
import ErrorModal from "../Components/GeneralComponents/ErrorModal"
import formatDate from '../Helpers/formatDate'
import MessageSent from '../Components/Contact/MessageSent'
import TabTitle from '../Components/GeneralComponents/TabTitle'
import { IError } from '../Interfaces/GeneralComponent'
import { IMessage } from '../Interfaces/GeneralComponent'

const ContactMe:FC = () => {
  const date = useMemo<string>(()=>formatDate(new Date()),[])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null|IError>(null)
  const [sent, setSent] = useState(false)
  const [data,setData] = useState({} as IMessage)
  
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
      if(!resp.id){
        setError(()=>{return {error:"error sending message"}})
        setLoading(()=>false)
        setSent(()=>false)
        return false
      }
    }catch(err){
      setError(()=>{return {error:"error sending message"}})
    }
    
    setLoading(()=>false)
    setSent(()=>true)
  }


  const handleSubmit =async(e:MouseEvent,formRef:MutableRefObject<HTMLFormElement>) =>{
    e.preventDefault()
    if(formRef.current.checkValidity()){
      await sendData()
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