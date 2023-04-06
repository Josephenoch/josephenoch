import React,{useEffect, FC} from 'react'
import { INode } from '../../Interfaces/SnakeComponents'
import Food from './Food'
import Snake from './Snake'

interface Props{
    increaseScore():void,
    direction:string,
    setDirection(direction?),
    running:boolean,
    setRunning(bool?),
    snakeBody:INode[],
    setSnakeBody(node?),
    getRandomCoordinates():INode,
    food:INode,
    setFood(node?)
}

const SnakeGame:FC<Props> = ({increaseScore, direction, setDirection,running,setRunning, snakeBody, setSnakeBody, getRandomCoordinates, food, setFood}) => {  
  
  
  useEffect(()=>{
    const sBody = [...snakeBody]
    let head = {...sBody[0]}
    const collision = () =>{
        const hitBody = sBody.slice(1).findIndex(snake=>
            snake.top===head.top&&snake.left===head.left
          )
        if((head.top>96||head.top<2)||(head.left>96||head.left<2)||hitBody!==-1){
            setRunning(false)
            return true
        }
        return false
    }
    if(head.top===food.top&&head.left===food.left ){
        const newTail = {...sBody[sBody.length-1]}
        sBody.push(newTail)
        increaseScore()
        setFood(getRandomCoordinates())
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
        setTimeout(()=>moveSnake(),300)
        
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
        setDirection((prevState)=>{
            // check if the newDirection is directly opposite the oldDirection i.e prevState
            if((newDirection==="UP"&&prevState==="DOWN")||(newDirection==="DOWN"&&prevState==="UP")||(newDirection==="RIGHT"&&prevState==="LEFT")||(newDirection==="RIGHT"&&prevState==="LEFT")){
                return prevState
            }
            return newDirection
        })
    }
    document.addEventListener("keydown",onKeyDown)
    setFood(getRandomCoordinates())
    return () => {
        document.removeEventListener("keydown",onKeyDown)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="relative h-52 w-54 border-b-2 border-b-lines">
        <Snake snakeBody={snakeBody}/>
        <Food food={food}/>
    </div>
  )
}

export default SnakeGame

// Enthusiast