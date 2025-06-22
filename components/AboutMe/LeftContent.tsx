import React from 'react'

// import getLines from '../../helpers/getLines'
import TabTitle from '../GeneralComponents/TabTitle'

const LeftContent = ({openEditor, handleChangeEditor, closeEditor}) => {
  const WIDTH = 65
  // const lines = useMemo(()=>{
  //   if(!(openEditor.pages.length>0)){
  //     return []
  //   }
  //   const genobj = getLines(openEditor.pages[openEditor.active]?.content, WIDTH)
  //   const res = []
  //   let result = genobj.next()
  //   while(!result.done){
  //     res.push(result.value)
  //     result = genobj.next()
  //   }
  //   return res
  // },[openEditor])
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
        <div
          className="w-full text-white"
          style={{
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            lineHeight: '1.6em'
          }}
        >
          {
            openEditor.pages.length > 0 &&
            openEditor.pages[openEditor.active]?.content
              .split('next_line')
              .map((line, index) => {
                const isBullet = /^\s*\[]/.test(line); // Detects lines starting with "*"
                const cleanLine = isBullet ? line.replace(/^\s*\[]\s?/, '• ') : line;
                return (
                  <div
                    key={index}
                    className="mt-2"
                    style={{
                      marginLeft: isBullet ? '1.5em' : 0
                    }}
                  >
                    {cleanLine || '\u00A0'}
                  </div>
                );
              })
          }
        </div>

        {/* {openEditor.pages.length==0&&<li className="list-decimal"><span className="ml-4">{"* No editor open, Click a file to read about me"}</span></li>} */}
      </div>
    </>
  )
}

export default LeftContent