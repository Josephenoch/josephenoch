import React,{createContext,useContext,useState, useEffect} from 'react'
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
const ProfesssionalInfoContext = createContext()

export const useProfessionalInfo =() =>{
    return useContext(ProfessionalInfoContext)
}

const ProfessionalInfoProvider = ({children}) => {
  const [data, setData] = useState([])
  const [error, setError] = useState([])
  useEffect(()=>{
    const getData = async()=>{
        try{
            const docsRef = collection(db,"professionalInfo")
            const docs = await getDocs(docsRef)
            const dat = docs.docs.map(doc=> doc.data())
            setData(dat)
        }
        catch(err){
            setError(err)
        }
    }
  },[])
  const value= {
    data,
    error
  }
  return (
    <ProfesssionalInfoContext.Provider value={value}>
        {children}
    </ProfesssionalInfoContext.Provider>
  )
}

export default ProfessionalInfoProvider