import React,{ useState, useEffect} from 'react'
 
import Styles from "../../styles/SnakeGame.module.css"

export const SnakeGame = () => {
  const [snakeBody, setSnakeBody] = useState([
    {x:11,y:11},
    {x:11,y:12},
    {x:11,y:13},

  ])
  const [direction, setDirection] = useState({x:0,y:0})
  const moveSnake = () =>{
    const sb = [...snakeBody]
    for (let i=sb.length-2;i>=0;i-- ){
      sb[i+1] = {...sb[i]}
    }
      sb[0].y += -1
      sb[0].x += 0


    return sb
  }
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     console.log(moveSnake())
  //   },400)
  // })

 
  return (
    <>
      <div className="w-[51%] h-[80%] bg-primary-dark rounded-lg">
       <div className={`${Styles.background} h-52 w-54`}>
        {snakeBody.map((body,index)=>
        <div 
          key={index}
          style={{
            gridColumnStart:body.x,
            gridRowStart:body.y
          }}
          className="bg-accent-green "
        >
        </div>
      )}
       </div>
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
