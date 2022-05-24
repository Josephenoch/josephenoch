import React,{useMemo} from 'react'

import getLines from '../../../Helpers/getLines'


const LeftContent = ({openEditor, handleChangeEditor}) => {
  const WIDTH = 59

  const lines = useMemo(()=>{
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
    <div className="w-full border-b-2 border-lines">
     {
       openEditor.pages.map((page,index)=>{
        const styles ={
          activeStyle:page.title==openEditor.pages[openEditor.active].title?"text-white":"",
          moreThanFourOpened:openEditor.pages.length>4?`w-28`:""
        }
        return <div key={index} onClick= {()=>handleChangeEditor(page)} className={ `${styles.moreThanFourOpened} cursor-pointer inline-flex px-3 items-center border-r-2 py-2  border-lines`}>
                <span className={`${styles.activeStyle} inline-block mr-10 overflow-hidden text-ellipsis whitespace-nowrap`}>{page.title}</span>
                <i className="ri-close-line"></i>
              </div>
      })
     }
     </div>
      <div className="pl-12 pr-10  border-r-2 border-lines pt-5 h-full overflow-y-auto scrollbar pb-10">
      <ol className='w-full'>
            <li className="list-decimal"><span className="ml-4">{"/**"}</span></li>
            <li className="list-decimal"><span className="ml-4">* About</span></li>
            {
              lines.map((line, index)=>
                  <li className="list-decimal" key={index}><span className="ml-4">* {line}</span></li>
              )
            }  
            <li className="list-decimal"><span className="ml-4">{"*/"}</span></li>

          </ol>
          <p className="w-fit lg:hidden">
            {openEditor.pages[openEditor.active].text}
          </p>
      </div>
    </>
  )
}

export default LeftContent