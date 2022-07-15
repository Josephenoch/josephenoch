import React,{FC, useState} from "react"
import AboutLayout from '../../Layouts/AboutMeLayout/AboutLayout'
import SpotifyProvider from '../../Contexts/SpotifyContext'
import RightContent from '../../Components/AboutMe/Hobbies/RightContent'
import PageNav from "../../Components/AboutMe/PageNav"
import LeftContent from "../../Components/AboutMe/LeftContent"
import { getDocs,collection } from "firebase/firestore"
import { db } from "../../firebase-config"
import { Page } from "../../Types/page"
import { IFolder } from "../../Interfaces/AboutInterface"

interface Props{
  files:IFolder[]
}

const Hobbies:Page<Props> = ({files}) => {
  const [openEditor, setOpenEditor] = useState(
      {
        active:0,
        pages:[
        ]
      }
    )
  const handleChangeEditor = ((selected) =>{
    setOpenEditor(prevState=>{
      if(prevState.pages.some(page=>page.title===selected.title)){
        const newActive = prevState.pages.findIndex(page=>page.title==selected.title)
        return {...prevState,active:newActive}
      }
      return {active:prevState.pages.length,pages:[...prevState.pages,selected]}
    })
  })
  
  const closeEditor = (item=>{
    setOpenEditor(prevState=>{
      const oldArray = [...prevState.pages]
      const newArray = oldArray.filter(arr=>arr.title!==item.title)
      return {active:0, pages:[...newArray]}
    })
  })
  return (
    <>
        <nav className="w-full lg:w-40 h-fit lg:h-full lg:border-r-2 border-r-lines">
            <PageNav files={files} handleChangeEditor={handleChangeEditor} pageTitle="hobbies"/>
        </nav>
        <article className="w-full  border-t-lines lg:w-[41.4%] h-fit lg:h-full text-secondary text-xs ">
            <LeftContent  openEditor={openEditor} handleChangeEditor={handleChangeEditor} closeEditor={closeEditor}/>
        </article>
        <div className="hidden lg:block w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
              <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
              </div>
        </div>
        <section className="w-full lg:w-[41.4%] h-full lg:border-l-2 border-lines">
          <aside className="h-full lg:border-r-2 lg:border-t-2 border-lines mt-8 py-5 px-7 flex flex-col items-center w-full  overflow-y-auto scrollbar-y text-secondary text-sm">
            <SpotifyProvider>
                <RightContent/>
            </SpotifyProvider>
          </aside>
        </section>
    </> 
      
  )
}

Hobbies.Layout = AboutLayout

export const getStaticProps= async()=>{
  const docsRef = collection(db,"hobbies")
    const docs = await getDocs(docsRef)
    const files = docs.docs.map(data=>data.data())
    files.sort(dat=>{
      if(dat.folderName==="none"){
        return -1
      }
      else{
        return 1
      }
    })
    return {
      props:{
        files
      },
      revalidate:10
    }
}
export default Hobbies
