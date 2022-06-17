import React,{createContext,useContext,useState,useEffect} from 'react'
import { doc, getDocs, collection } from "firebase/firestore";
import { db } from '../firebase-config';

const ProjectContext = createContext()

export const useProject = () =>{
  return useContext(ProjectContext)
}

const ProjectProvider = ({children}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const getData = async()=>{
      setLoading(true)
      setError(null)
      const docsRef = collection(db, "stack");
      const docsSnap = await getDocs(docsRef);
      const dat = docsSnap.docs.map(data=>data.data())
      if(dat.length===0){
        setError(true)
        setLoading(false)
        return false
      }
      setLoading(false)
      setData(dat)
    }
    useEffect(()=>{
        getData()
      },[])
    const clearError = () =>{
      setError(null)
    }
    const value ={
      data,
      loading,
      error,
      getData,
      clearError
    }
  return (
    <ProjectContext.Provider value={value} >
        {children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider