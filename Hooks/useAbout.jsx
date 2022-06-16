import React,{useState, useEffect} from 'react'
import { db } from '../firebase-config'
import { getDocs, collection } from 'firebase/firestore'
const useAbout = (collectionName) => {
  const [files, setFiles] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const getData= async() =>{
    setError(null)
    setLoading(true)
    const docsRef = collection(db,collectionName)
    const docs = await getDocs(docsRef)
    const data = docs.docs.map(data=>data.data())
    setLoading(false)
    if(data.length===0){
      setError("Unable to receive data")
      return false
    }
    data.sort(dat=>{
      if(dat.folderName==="none"){
        return -1
      }
      else{
        return 1
      }
    })
    setFiles(data)
  }
  useEffect(()=>{
    getData()
  },[])
  const clearError = () =>{
    setError(null)
  }
  return {
    files,
    error,
    loading,
    getData,
    clearError
  }
}

export default useAbout