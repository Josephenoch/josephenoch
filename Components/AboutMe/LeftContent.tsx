import React,{useMemo} from 'react'

import getLines from '../../Helpers/getLines'
import TabTitle from '../GeneralComponents/TabTitle'

const LeftContent = ({openEditor, handleChangeEditor, closeEditor}) => {
  const WIDTH = 62
  const lines = useMemo(()=>{
    if(!(openEditor.pages.length>0)){
      return []
    }
    const genobj = getLines(openEditor.pages[openEditor.active]?.content, WIDTH)
    const res = []
    let result = genobj.next()
    while(!result.done){
      res.push(result.value)
      result = genobj.next()
    }
    return res
  },[openEditor])
  return (
    <>

    <div className={`w-full min-h-[33.6px] ${openEditor.pages.length>0&&"border-b-2"} border-lines lg:border-b-2 overflow-x-auto scrollbar-x flex flex-nowrap`}>
     {
       openEditor.pages.map((page,index)=>{
        const styles ={
          activeStyle:page.title==openEditor.pages[openEditor.active].title?"text-white":"",
          }
        return <TabTitle key={index} handleChangeEditor={()=>handleChangeEditor(page)} closeEditor={()=>closeEditor(page)} page={page} title={page.title} closeAble styles={styles}/>

      })
     }
     </div>
      <div className={`pl-4 pr-10  lg:border-r-2 border-lines pt-5 border-b-2 h-full overflow-y-auto scrollbar-y lg:pb-10`}>
        <ol className='w-full hidden lg:block'>

          <li className="list-decimal"><span className="ml-4 ">{"/**"}</span></li>
          {openEditor.pages.length>0&&<li className="list-decimal"><span className="ml-4">* About</span></li>}
          {
            lines.map((line, index)=>{
              console.log(line?.search(/\*next_line\*/))
              return(
                <li className="list-decimal leading-5" key={index}>
                  <span className="ml-4">
                  * {line}
                  </span>
                </li>
              )
            }
               
            )
          }  
          {openEditor.pages.length==0&&<li className="list-decimal"><span className="ml-4">{"* No editor open, Click a file to read about me"}</span></li>}
          <li className="list-decimal"><span className="ml-4">{"*/"}</span></li>
        </ol>
        <p className="w-full lg:hidden">
          {openEditor.pages.length==0&&"No editor open, Click a file to read about me"}
          {openEditor.pages[openEditor.active]?.content}
        </p>
      </div>
    </>
  )
}

export default LeftContent