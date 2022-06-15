import React,{createContext,useContext,useState, useEffect} from 'react'
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const ProfessionalInfoContext = createContext()

export const useProfessionalInfo =() =>{
    return useContext(ProfessionalInfoContext)
}

const ProfessionalInfoProvider = ({children}) => {
  const [data, setData] = useState([])
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const getData = async()=>{
        try{
            const docsRef = collection(db,"professionalInfo")
            const docs = await getDocs(docsRef)
            const dat = docs.docs.map(doc=> doc.data())
            dat.sort(da=>{
              if(da.folderName==="none"){
                return -1
              }
              else{
                return 1
              }
            })
            setData(dat)
        }
        catch(err){
            setError(err)
        }
        setLoading(false)
    }
    getData()
  },[])
  const value= {
    data,
    error,
    loading
  }
  return (
    <ProfessionalInfoContext.Provider value={value}>
        {children}
    </ProfessionalInfoContext.Provider>
  )
}

export default ProfessionalInfoProvider