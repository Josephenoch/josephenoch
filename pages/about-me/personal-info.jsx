import React,{useState, useEffect} from 'react'
import { db } from '../../firebase-config'
import { getDocs, collection } from 'firebase/firestore'
import AboutLayout from '../../Layouts/AboutMeLayout/AboutLayout'
import CodeShowCaseSection from "../../Components/AboutMe/PersonalInfo/CodeShowCaseSection"
import PageNav from '../../Components/AboutMe/PageNav'
import LeftContent from '../../Components/AboutMe/LeftContent'
const PersonalInfo = ({files}) => {  
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
            <PageNav files={files} handleChangeEditor={handleChangeEditor} pageTitle={"professional-info"}/>
        </nav>
        <article className="w-full  border-t-lines lg:w-[41.4%] h-fit lg:h-full text-secondary text-xs ">
            <LeftContent  openEditor={openEditor} handleChangeEditor={handleChangeEditor} closeEditor={closeEditor}/>
        </article>
      <div className="lg:block hidden w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
          <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
          </div>
        </div>
        <div className="lg:block hidden w-[41.4%] h-full border-l-2 border-lines">
          <div className="h-full border-r-2 border-t-2 border-lines mt-8 py-5 px-7  overflow-y-auto scrollbar-y text-secondary text-sm">
            <CodeShowCaseSection/>
          </div>
        </div>
    </>
    
  )
}

PersonalInfo.Layout = AboutLayout

export default PersonalInfo


export const getStaticProps= async()=>{
  // const {files,error, loading, clearError, getData} = useAbout("professionalInfo")
  const docsRef = collection(db,"personalInfo")
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


