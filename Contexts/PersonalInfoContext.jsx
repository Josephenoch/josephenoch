import React,{createContext, useContext, useState, useEffect} from 'react'
import { db } from '../firebase-config'
import { getDocs, collection } from 'firebase/firestore'
const PersonalInfoContext = createContext()

export const usePersonalInfo = () =>{
  return useContext(PersonalInfoContext)
}
const PersonalInfoProvider = ({children}) => {
  const [data, setData] = useState([])
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const getData= async() =>{
      const docsRef = collection(db,"personaInfo")
      try{
        const docs = await getDocs(docsRef)
        const dat = docs.docs.map(data=>data.data())
        dat.sort(da=>{
          if(da.folderName==="none"){
            console.log(da.folderName)
            return -1
          }
          else{
            return 1
          }
        })
        setData(dat)
      }
      catch(err){
        // console.log(err)
        console.log("hi")
        setError(err)
      }
      setLoading(false)
    }
    getData()

  },[])
  const value = {
    data,
    loading,
    error
  }
  return (
    <PersonalInfoContext.Provider value={value}>
      {children}
    </PersonalInfoContext.Provider>
  )
}

export default PersonalInfoProvider