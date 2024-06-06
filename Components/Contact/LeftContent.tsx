import React, {FC, memo,useRef, ChangeEvent, MutableRefObject, MouseEvent } from 'react'
import Button from '../GeneralComponents/Button'
import { IMessage } from '../../interfaces/GeneralComponent'

interface Props{
    handleChange(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void,
    handleSubmit(e:MouseEvent<HTMLButtonElement>,formRef:MutableRefObject<HTMLFormElement>):Promise<void>,
    values: IMessage
}

const LeftContent:FC<Props> = ({handleChange, handleSubmit, values}) => {
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <div className="w-full h-full text-xs flex flex-col pt-10 lg:pt-20  items-center">
        <form className="space-y-4" ref={formRef}>
            <div className="flex flex-col space-y-2">
                <label htmlFor="name" className='text-secondary'>_name:</label>
                <input 
                    required 
                    type="text" 
                    name="name" 
                    value={values?.name}
                    onChange={handleChange} 
                    className="w-72 bg-primary-light rounded-md border-lines focus:ring-[0.5px] "/>
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="email" className='text-secondary'>_email:</label>
                <input 
                    required 
                    type="email" 
                    name="email" 
                    value={values?.email}
                    onChange={handleChange} 
                    className="w-72 bg-primary-light rounded-md border-lines focus:ring-[0.5px] "/>
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="message" className='text-secondary'>_message:</label>
                <textarea 
                    required
                    name="message"
                    value={values?.message} 
                    onChange={handleChange} 
                    className="h-32 w-72 bg-primary-light rounded-md border-lines focus:ring-[0.5px] overflow-auto scrollbar-y resize-none"/>
            </div>
            <div className='w-full mt-2'>
                <Button onClick={(e)=>handleSubmit(e,formRef)}>submit-message</Button>
            </div>
        </form>
    </div>
  )
}

export default memo(LeftContent)