import React,{useRef,useLayoutEffect, useEffect,useState } from 'react'
import getLines from '../../Helpers/getLines'
export const LeftContent = () => {
  const [lines,setLines] = useState([])
  const pRef = useRef()
  const text ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolores odio excepturi! Placeat autem deserunt eum perspiciatis velit ullam numquam esse vel, pariatur corrupti voluptatum voluptas distinctio! Ipsa, assumenda harum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolores odio excepturi! Placeat autem deserunt eum perspiciatis velit ullam numquam esse vel, pariatur corrupti voluptatum voluptas distinctio! Ipsa, assumenda harum."
  


  useLayoutEffect(()=>{
    if(pRef.current){
        pRef.current.style.display="none"
    }
  },[])
  useEffect(()=>{
    setLines(getLines(text))
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
          <p ref={pRef} className="w-fit">
            {text}
          </p>
        </div>
    </>
  )
}
