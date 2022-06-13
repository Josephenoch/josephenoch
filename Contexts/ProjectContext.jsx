import React,{createContext,useContext,useState,useEffect} from 'react'
import { doc, getDocs, collection } from "firebase/firestore";
import { db } from '../firebase-config';

const ProjectContext = createContext()

export const useProject = () =>{
  return useContext(ProjectContext)
}

const ProjectProvider = ({children}) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        console.log(db)
        const getData = async()=>{
          const docsRef = collection(db, "stack");
          const docsSnap = await getDocs(docsRef);
          const dat = docsSnap.docs.map(data=>data.data())
          console.log(dat)
          setData(dat)
        }
        getData()
      },[])
  return (
    <ProjectContext.Provider value={data} >
        {children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider