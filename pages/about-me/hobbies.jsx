import React,{useState, useEffect} from 'react'
import { db } from '../../firebase-config'
import { getDocs, collection } from 'firebase/firestore'
import AboutLayout from '../../Layouts/AboutMeLayout/AboutLayout'
import LeftComponent from '../../Components/AboutMe/LeftComponent'
import SpotifyProvider from '../../Contexts/SpotifyContext'
import RightContent from '../../Components/AboutMe/Hobbies/RightContent'

const Hobbies = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const getData= async() =>{
      const docsRef = collection(db,"hobbies")
      const docs = await getDocs(docsRef)
      const dat = docs.docs.map(data=>data.data())
      setLoading(false)
      if(dat.length===0){
        setError("Unable to receive data")
        return false
      }
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
    getData()

  },[])
  return (      
      <>
      <LeftComponent error={error} files={data} loading={loading} pageTitle="hobbies"/>
        <div className="w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
              <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
              </div>
        </div>
        <section className="w-[41.4%] h-full border-l-2 border-lines">
          <aside className="h-full border-r-2 border-t-2 border-lines mt-8 py-5 px-7 flex flex-col items-center  overflow-y-auto scrollbar-y text-secondary text-sm">
            <SpotifyProvider>
                <RightContent/>
            </SpotifyProvider>
          </aside>
        </section>
    </>
      
  )
}

Hobbies.Layout = AboutLayout

export default Hobbies