import React,{useState} from 'react'
import Food from './Food'
import Snake from './Snake'

const SnakeGame = () => {
  const getRandomCoordinates = () =>{
    let min = 1
    let max = 98
    let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2
    let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2
    console.log({top:y, left:x})
    return {top:y, left:x}
  } 
  const [food, setFood] = useState(getRandomCoordinates)
  const [snakeBody, setSnakeBody] = useState (
    [
        {
            top:0,
            left:0
        },
        {
            top:0,
            left:2
        },
        {
            top:0,
            left:4
        },
        {
            top:0,
            left:6
        },
        {
            top:0,
            left:8
        }
    ]
  )
  return (
    <div className="relative h-52 w-54">
        <Snake snakeBody={snakeBody}/>
        <Food food={food}/>
    </div>
  )
}

export default SnakeGame