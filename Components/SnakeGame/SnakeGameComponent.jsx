import React,{ useState, useEffect} from 'react'
 
import Styles from "../../styles/SnakeGame.module.css"
import SnakeGame from './SnakeGame'

const SnakeGameComponent = () => {
  return (
    <>
      <div className="w-[51%] h-[80%] bg-primary-dark rounded-lg">
        <SnakeGame/>
       <div className="bg-primary-lighter/[84%] w-full py-3 text-center ">
        <span className="text-accent-green uppercase text-lg"> Well done!</span>
       </div>
       <span className="text-sm text-center w-full block mt-3"> play-again</span>

      </div>
      <div className="w-[35%] h-[80%]">
      </div>
    
    </>
  )
}
export default SnakeGameComponent