import React,{useMemo} from 'react'

import getLines from '../../Helpers/getLines'


const LeftContent = ({openEditor, handleChangeEditor, closeEditor}) => {
  const WIDTH = 59
  const lines = useMemo(()=>{
    if(!(openEditor.pages.length>0)){
      return []
    }
    const genobj = getLines(openEditor.pages[openEditor.active].text, WIDTH)
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
    <div className="w-full min-h-[33.6px] border-b-2 border-lines  overflow-x-auto scrollbar-x flex flex-nowrap">
     {
       openEditor.pages.map((page,index)=>{
        const styles ={
          activeStyle:page.title==openEditor.pages[openEditor.active].title?"text-white":"",
          moreThanFourOpened:openEditor.pages.length>4&&`w-28`}
        return <div key={index}  className={ `${styles.moreThanFourOpened} inline-flex items-center border-r-2   border-lines`}>
                <span  onClick={()=>handleChangeEditor(page)} className={`${styles.activeStyle} cursor-pointer inline-block pr-2 pl-6 py-2  overflow-hidden text-ellipsis whitespace-nowrap`}>{page.title}</span>
                <span onClick={()=>closeEditor(page)} className=" cursor-pointer w-4 h-4 inline-flex mr-2 items-center bg-gray-50/10 justify-center rounded-full"><i className="ri-close-line"></i></span>
              </div>
      })
     }
     </div>
      <div className="pl-12 pr-10  border-r-2 border-lines pt-5 h-full overflow-y-auto scrollbar-y pb-10">
        <ol className='w-full'>

          <li className="list-decimal"><span className="ml-4">{"/**"}</span></li>
          {openEditor.pages.length>0&&<li className="list-decimal"><span className="ml-4">* About</span></li>}
          {
            lines.map((line, index)=>
                <li className="list-decimal" key={index}><span className="ml-4">* {line}</span></li>
            )
          }  
          {openEditor.pages.length==0&&<li className="list-decimal"><span className="ml-4">{"* No editor open, Click a file to read about me"}</span></li>}
          <li className="list-decimal"><span className="ml-4">{"*/"}</span></li>
        </ol>
        <p className="w-fit lg:hidden">
          {openEditor.pages[openEditor.active]?.text}
          
        </p>
      </div>
    </>
  )
}

export default LeftContent