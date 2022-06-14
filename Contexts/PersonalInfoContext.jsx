import React,{createContext, useContext, useState, useEffect} from 'react'
import { db } from '../firebase-config'
import { getDocs, collection } from 'firebase/firestore'
const PersonalInfoContext = createContext()

export const usePersonalInfo = () =>{
  return useContext(PersonalInfoContext)
}
const PersonalInfoProvider = ({children}) => {
  const [data, setData] = useState([])
  useEffect(()=>{
    const getData= async() =>{
      try{
        const docsRef = collection(db,"personalInfo")
        const docs = await getDocs(docsRef)
        const dat = docs.docs.map(data=>data.data())
        setData(dat)
        console.log(dat)
      }
      catch(err){

      }
    }
    getData()

  },[])
  return (
    <PersonalInfoContext.Provider value={data}>
      {children}
    </PersonalInfoContext.Provider>
  )
}

export default PersonalInfoProvider