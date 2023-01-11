import React, { useMemo,FC } from 'react'
import formatDate from '../../Helpers/formatDate'
import { IMessage } from '../../Interfaces/GeneralComponent'
import ColoredText from '../GeneralComponents/ColoredText'
interface Props{
  values:IMessage
}
const RightContent:FC<Props> = ({values}) => {
  const today = useMemo(()=>formatDate(new Date()),[])
  return (
    <div className="hidden lg:block w-1/2 overflow-y-auto scrollbar-y h-full border-r-2 border-r-lines">
        <div className="w-full h-full text-xs flex flex-col py-20  items-center">
            <ol className=" w-[25rem] text-secondary">
              <li className="pl-2 list-decimal">
                <ColoredText color="accent-pink">const</ColoredText> 
                <ColoredText color="secondary-purple"> button</ColoredText> 
                <ColoredText color="accent-pink"> =</ColoredText> 
                <ColoredText color="secondary-purple"> document.querySelector</ColoredText>
                {"("}
                <ColoredText color="accent">{"'#sendBtn'"}</ColoredText>
                {");"}
              </li>
              <li className="pl-2 list-decimal"></li>
              <li className="pl-2 list-decimal">
                <ColoredText color="accent-pink">const</ColoredText>
                <ColoredText color="secondary-purple"> message</ColoredText>
                <ColoredText color="accent-pink"> =</ColoredText> 
                {" {"}
              </li>
              <li className="pl-4 list-decimal">
                <ColoredText color="secondary-purple">name</ColoredText>:
                <ColoredText color="accent">{` "${values?.name}"`}</ColoredText>,
              </li>
              <li className="pl-4 list-decimal">
                <ColoredText color="secondary-purple">email</ColoredText>:
                <ColoredText color="accent">{` "${values?.email}"`}</ColoredText>,
              </li>
              <li className="pl-4 list-decimal break-words">
                <ColoredText color="secondary-purple">message</ColoredText>:
                <ColoredText color="accent ">{` "${values?.message}"`}</ColoredText>,
              </li>
              <li className="pl-4 list-decimal"> 
                date:
                <ColoredText color="accent">{` "${today}"`}</ColoredText>
              </li>
              <li className="pl-2 list-decimal">
                <ColoredText color="secondary">{"}"}</ColoredText>
              </li>
              <li className='pl-2 list-decimal'></li>
              <li className="pl-2 list-decimal">
                <ColoredText color="secondary-purple">button.addEventListener</ColoredText>{"("}
                <ColoredText color="accent">{"'click'"}</ColoredText>, () 
                <ColoredText color="accent-pink">{" =>"}</ColoredText> {"{"}
              </li>
              <li className="pl-4 list-decimal">
                <ColoredText color="secondary-purple">form.send</ColoredText>{"("}
                <ColoredText color="secondary-purple">{"message"}</ColoredText>{");"}
              </li>
              <li className="pl-2 list-decimal">
                <ColoredText color="secondary">{"})"}</ColoredText>
              </li>
            </ol>
        </div>
    </div>
  )
}

export default RightContent