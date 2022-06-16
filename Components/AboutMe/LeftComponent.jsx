import React,{useState} from 'react'
import LeftContent from './LeftContent'
import PageNav from './PageNav'
import ErrorModal from '../GeneralComponents/ErrorModal'
import useAbout from '../../Hooks/useAbout'

const LeftComponent = ({pageTitle, collectionName}) => {
  const {files,error, loading, clearError, getData} = useAbout(collectionName)
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
  const close= () =>{
    clearError()
  }
  const retry = async() =>{
    await getData()
  }
  return (
    <>
    {error&&<ErrorModal close={close} retry={retry}/>}
        <nav className="w-40 h-full border-r-2 border-r-lines">
            <PageNav loading={loading} files={files} handleChangeEditor={handleChangeEditor} pageTitle={pageTitle}/>
        </nav>
        <article className="w-[41.4%] h-full text-secondary text-xs border-r-lines">
            <LeftContent  openEditor={openEditor} handleChangeEditor={handleChangeEditor} closeEditor={closeEditor}/>
        </article>
      </>
  )
}

export default LeftComponent