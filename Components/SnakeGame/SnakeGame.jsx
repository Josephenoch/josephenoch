import React,{useEffect, useState} from 'react'
import Food from './Food'
import Snake from './Snake'

const SnakeGame = () => {  
  const startCoordinates = [
    {
        top:46,
        left:50
    },
    {
        top:48,
        left:50
    },
    {
        top:50,
        left:50
    },
    {
        top:52,
        left:50
    },
    {
        top:54,
        left:50
    }
]
  const [direction,setDirection]= useState("UP")
  const [running,setRunning] = useState(false)
  const [food, setFood] = useState({})
  const [score,setScore] = useState(0)
  const [snakeBody, setSnakeBody] = useState (startCoordinates)
  const getRandomCoordinates = () =>{
    let min = 1
    let max = 98
    let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2
    let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2
    const sBody = [...snakeBody]
    const retry = sBody.findIndex(snake=>
      snake.top===y&&snake.left===x  
    )
    if(retry===-1){
        return {top:y, left:x}
    }
    getRandomCoordinates()
  } 
  useEffect(()=>{
    const sBody = [...snakeBody]
    let head = {...sBody[0]}
    const collision = () =>{
        const hitBody = sBody.slice(1).findIndex(snake=>
            snake.top===head.top&&snake.left===head.left
          )
        if((head.top>96||head.top<2)||(head.left>96||head.left<2)||hitBody!==-1)return true
        return false
    }
    if(head.top===food.top&&head.left===food.left ){
        const newTail = {...sBody[sBody.length-1]}
        sBody.push(newTail)
        setScore(prevState=>prevState+1)
        setFood(getRandomCoordinates)
    }
    const moveSnake = () =>{
        switch(direction){
            case "RIGHT" :
                head.left =head.left+2
                break
            case "LEFT" :
                head.left=head.left-2
                break
            case "UP":
                head.top =head.top-2
                break
            case "DOWN":
                head.top =head.top+2
                break
        }
        sBody.unshift({...head})
        sBody.pop()
        setSnakeBody([...sBody])
      }
    if(running===true && !collision()){
        setTimeout(()=>moveSnake(),100)
        
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[snakeBody,running])
  useEffect(()=>{
    const onKeyDown=(e)=>{
        setRunning(true)
        let newDirection 
        switch(e.keyCode){
            case 38:
                newDirection="UP"
                break
            case 40:
                newDirection="DOWN"
                break
            case 37:
                newDirection="LEFT"
                break
            case 39:
                newDirection="RIGHT"
                break
        }    
        setDirection(prevState=>{
            // check if the newDirection is directly opposite the oldDirection i.e prevState
            if((newDirection==="UP"&&prevState==="DOWN")||(newDirection==="DOWN"&&prevState==="UP")||(newDirection==="RIGHT"&&prevState==="LEFT")||(newDirection==="RIGHT"&&prevState==="LEFT")){
                return prevState
            }
            return newDirection
        })
    }
    document.addEventListener("keydown",onKeyDown)
    setFood(getRandomCoordinates)
    return () => document.removeEventListener("keydown",onKeyDown)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="relative h-52 w-54">
        <Snake snakeBody={snakeBody}/>
        <Food food={food}/>
    </div>
  )
}

export default SnakeGame