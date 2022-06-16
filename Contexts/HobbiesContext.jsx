import React,{createContext,useContext,useState, useEffect} from 'react'
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const HobbiesContext = createContext()

export const useHobbies =() =>{
    return useContext(HobbiesContext)
}

const HobbiesProvider = ({children}) => {
  const [data, setData] = useState([])
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const getData = async()=>{
        try{
            const docsRef = collection(db,"hobbies")
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
    }
    getData()
  },[])
  const value= {
    data,
    error,
    loading
  }
  return (
    <HobbiesContext.Provider value={value}>
        {children}
    </HobbiesContext.Provider>
  )
}

export default HobbiesProvider