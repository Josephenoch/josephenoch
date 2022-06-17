import React from 'react'

const LeftContent = () => {
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div className="w-[41.4%] h-full border-r-2 border-r-lines">
        <div className=" min-h-[33.6px] border-b-2 border-lines  overflow-x-auto scrollbar-x flex flex-nowrap">
            <span className="cursor-pointer inline-block border-r-2 text-xs border-r-lines pr-20 pl-6 py-2 capitalize overflow-hidden text-ellipsis whitespace-nowrap">contact</span>
        </div>
        <form className="w-full text-xs flex flex-col  mt-12 items-center">
            <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className='text-secondary'>_name:</label>
                    <input type="text" id='name' required className="w-72 bg-primary-light rounded-md border-lines focus:ring-[0.5px] "/>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className='text-secondary'>_email:</label>
                    <input type="email" id='email'required  className="w-72 bg-primary-light rounded-md border-lines focus:ring-[0.5px] "/>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className='text-secondary'>_message:</label>
                    <textarea id='message' required className="h-32 w-72 bg-primary-light rounded-md border-lines focus:ring-[0.5px] "/>
                </div>
                <div className='w-full mt-2'>
                    <button onClick={(e)=>handleSubmit(e)} className="bg-lines/60 hover:scale-105 hover:bg-lines/80 active:bg-lines active:scale-90 transition-all duration-200 ease-linear px-4 py-2 rounded-md">submit-message</button>
                </div>
            </div>
            
            
        </form>
    </div>
  )
}

export default LeftContent