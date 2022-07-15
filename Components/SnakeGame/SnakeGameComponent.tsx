import React,{ useState, useEffect} from 'react'
import Keypad from './Keypad'
import Button from "../GeneralComponents/Button"
import SnakeGame from './SnakeGame'
import { INode } from '../../Interfaces/SnakeComponents'

const SnakeGameComponent = () => {
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
  const [snakeBody, setSnakeBody] = useState<INode[]>(startCoordinates)
  const [running,setRunning] = useState<boolean|null>()  
  const [direction,setDirection]= useState<string>("UP")
  const [score,setScore] = useState<number>(0)
  const [highScore,setHighScore] = useState<number>(0)
  const [food, setFood] = useState<INode>({top:0, left:0})
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
  useEffect(()=>setHighScore(Number(JSON.parse(window.localStorage.getItem("highScore"))||0)),[])
  const increaseScore = () =>{
    setScore(prevState =>prevState+1)
  }
  const setNewHighScore = () =>{
    if(score>highScore){
      setHighScore(score)
      window.localStorage.setItem("highScore",String(score))
    }
  }
  const move = (direction) =>{
    if(!running){
      setRunning(true)
    }
    setDirection(direction)
  }
  const restart = () =>{
    setNewHighScore()
    setScore(0)
    setRunning(undefined)
    setSnakeBody(startCoordinates)
    setFood(getRandomCoordinates())
  }
  return (
  <div 
      style={{
          background:"linear-gradient(135deg, rgba(67, 217, 173,0.7), rgba(23, 85, 83,0.7))"
      }}
      className=" ml-20 hidden lg:flex w-[35%] px-8 h-[80%] shadow-[_116px_85px_66px_-54px_rgba(77,91,206,0.3),_-59px_-99px_81px_-41px_rgba(67,217,173,0.64);] justify-center items-center rounded-md"
    >
      <div className="w-[50%] h-[80%] bg-primary-dark rounded-lg ">
        <SnakeGame 
          increaseScore={increaseScore} 
          direction={direction} 
          setDirection={setDirection}
          running={running}
          setRunning={setRunning}
          snakeBody={snakeBody}
          setSnakeBody={setSnakeBody}
          food={food}
          setFood={setFood}
          getRandomCoordinates={getRandomCoordinates}
        />
        {(running!==undefined&&running===false)&&<div className="bg-primary-lighter/[84%] w-full py-3 text-center ">
          <span className="text-accent-green uppercase text-lg"> Well done!</span>
        </div>}
        <div className="w-full flex justify-center"><Button onClick={restart}>restart</Button></div>
      </div>
      <div className="w-[50%] h-[80%] flex flex-col px-5 items-center">
        <div className="text-xs bg-white/10 px-2 py-4 rounded-md h-fit w-[100%]">
          <p>{"// use keyboard"}</p>
          <p>{"// use arrows to play"}</p>
          <div className="flex h-fit items-end ml-3 mt-5 w-20 space-x-1">
            <Keypad onClick={()=>move("LEFT")} direction={4}/>
            <div className="flex items-center justify-center flex-wrap flex-row h-14">
              <Keypad onClick={()=>move("UP")} direction={1}/>
              <Keypad onClick={()=>move("DOWN")} direction={3}/>
            </div>
            <Keypad onClick={()=>move("RIGHT")} direction={2}/>
          </div>
        </div>
        <div className="w-full mt-5">
          <p className="text-xs">Current Score: {score}</p>
          <p className="text-xs">High Score: {highScore}</p>
        </div>
      </div>
    </div>

  )
}
export default SnakeGameComponent