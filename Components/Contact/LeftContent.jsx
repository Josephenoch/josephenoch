import React, { useCallback,memo,useRef } from 'react'

const LeftContent = ({handleChange, handleSubmit}) => {
  const formRef = useRef()
  return (
    <div className="w-full h-full text-xs flex flex-col pt-20  items-center">
        <form className="space-y-4" ref={formRef}>
            <div className="flex flex-col space-y-2">
                <label htmlFor="name" className='text-secondary'>_name:</label>
                <input type="text" name="name" onChange={(e)=>handleChange(e)} id='name' required className="w-72 bg-primary-light rounded-md border-lines focus:ring-[0.5px] "/>
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="email" className='text-secondary'>_email:</label>
                <input type="email" name="email" onChange={(e)=>handleChange(e)} id='email'required  className="w-72 bg-primary-light rounded-md border-lines focus:ring-[0.5px] "/>
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="message" className='text-secondary'>_message:</label>
                <textarea id='message' name="message" onChange={(e)=>handleChange(e)} required className="h-32 w-72 bg-primary-light rounded-md border-lines focus:ring-[0.5px] overflow-auto scrollbar-y resize-none"/>
            </div>
            <div className='w-full mt-2'>
                <button onClick={(e)=>handleSubmit(e,formRef)} className="bg-lines/60 hover:scale-105 hover:bg-lines/80 active:bg-lines active:scale-90 transition-all duration-200 ease-linear px-4 py-2 rounded-md ">submit-message</button>
            </div>
        </form>
    </div>
  )
}

export default memo(LeftContent)