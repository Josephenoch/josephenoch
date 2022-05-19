import React,{useMemo } from 'react'
import getLines from '../../Helpers/getLines'
export const LeftContent = () => {
  const text ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolores odio excepturi! Placeat autem deserunt eum perspiciatis velit ullam numquam esse vel, pariatur corrupti voluptatum voluptas distinctio! Ipsa, assumenda harum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolores odio excepturi! Placeat autem deserunt eum perspiciatis velit ullam numquam esse vel, pariatur corrupti voluptatum voluptas distinctio! Ipsa, assumenda harum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolores odio excepturi! Placeat autem deserunt eum perspiciatis velit ullam numquam esse vel, pariatur corrupti voluptatum voluptas distinctio! Ipsa, assumenda harum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolores odio excepturi! Placeat autem deserunt eum perspiciatis velit ullam numquam esse vel, pariatur corrupti voluptatum voluptas distinctio! Ipsa, assumenda harum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolores odio excepturi! Placeat autem deserunt eum perspiciatis velit ullam numquam esse vel, pariatur corrupti voluptatum voluptas distinctio! Ipsa, assumenda harum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolores odio excepturi! Placeat autem deserunt eum perspiciatis velit ullam numquam esse vel, pariatur corrupti voluptatum voluptas distinctio! Ipsa, assumenda harum."
  
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
        <div className="px-12 pr-20 border-t-2 border-r-2 border-lines pt-5 h-full">
          <ol>
            <li className="list-decimal"><span className="ml-5">{"/**"}</span></li>
            <li className="list-decimal"><span className="ml-5">* About</span></li>
            {
              lines.map((line, index)=>
                  <li className="list-decimal" key={index}><span className="ml-4">* {line}</span></li>
              )
            }  
            <li className="list-decimal"><span className="ml-5">{"*/"}</span></li>

          </ol>
          <p className="w-fit lg:hidden">
            {text}
          </p>
        </div>
    </>
  )
}
