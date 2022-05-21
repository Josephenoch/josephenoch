import React,{useMemo } from 'react'
import getLines from '../../Helpers/getLines'
export const LeftContent = () => {
  const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero fugiat ullam, omnis minima officia impedit porro eum cumque voluptatem aspernatur, tenetur qui maiores. Assumenda quibusdam consequuntur maxime accusamus nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero fugiat ullam, omnis minima officia impedit porro eum cumque voluptatem aspernatur, tenetur qui maiores. Assumenda quibusdam consequuntur maxime accusamus nihil."
  
  const WIDTH = 59

  const lines = useMemo(()=>{
    const genobj = getLines(text, WIDTH)
    const res = []
    let result = genobj.next()
    while(!result.done){
      res.push(result.value)
      result = genobj.next()
    }
    return res
  },[])
   
  return (
    <>
        <div className="inline-flex px-3 items-center border-r-2 py-2 border-lines">
            <span className='inline-block mr-10'>personal-info</span>
            <i className="ri-close-line"></i>
        </div>
        <div className="pl-12 pr-10 border-t-2 border-r-2 border-lines pt-5 h-full overflow-y-auto scrollbar pb-10">
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
            {text}
          </p>
        </div>
    </>
  )
}
