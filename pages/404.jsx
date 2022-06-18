import React from 'react'
import Button from '../Components/GeneralComponents/Button'
import Link from "next/link"
import {useRouter} from 'next/router'
const NotFound = () => {
  const router = useRouter()
  return (
    <div className="flex text-secondary w-full h-full flex-col items-center justify-center">
      <div className=" w-2/5 flex flex-col items-center justify-center">
        <p className="text-[5rem] "><i className="ri-emotion-sad-line"></i></p>
        <p className="text-xs mb-2">404</p>
        <p className="text-xs mb-2">Page not found.</p>
        <p className="text-center text-xs mb-4">You likely forgot to export your component from the file {"it's"} defined in, or you might have mixed up default and named imports</p>
        <div className="space-x-2">
          <Button>
            <Link href="/">
              <a className="text-white">Go Home</a>
            </Link>
          </Button>
          <Button onClick={()=>router.back()}>
              Go back
          </Button>  
        </div>
      </div>
      
    </div>
  )
}

export default NotFound