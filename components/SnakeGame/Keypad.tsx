import React,{memo,FC, ReactNode} from 'react'

interface Props{
    direction:number,
    onClick():void,
    [x:string]:any
}

const Keypad:FC<Props> = ({direction,onClick, ...rest}) => {
  let Icon: ReactNode
  switch(direction){
    case 1 :
        Icon =<i className="ri-arrow-up-s-fill"/>
        break
    case 2 :
        Icon =<i className="ri-arrow-right-s-fill"/>
        break
    case 3 :
        Icon =<i className="ri-arrow-down-s-fill"/>
        break
    case 4 :
        Icon =<i className="ri-arrow-left-s-fill"/>
        break
    default :
        Icon =<i className="ri-arrow-up-s-fill"/>
        break
  }
  return (
    <button className="bg-black py-1 px-4 h-fit rounded-md active:scale-90 hover:scale-105 transition-all duration-75 ease-linear" onClick={onClick} {...rest}>
        {Icon}
    </button>
  )
}

export default memo(Keypad)