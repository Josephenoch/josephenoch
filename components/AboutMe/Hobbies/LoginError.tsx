import Link from 'next/link'
import React from 'react'
import { useSpotifyContext } from '../../../contexts/SpotifyContext'

const LoginError = () => {
  const {error} = useSpotifyContext()
  let errorType:string
  if(error?.code==="ERR_BAD_REQUEST"){
      errorType = "This error is from us, Please refresh to clear it up"
  }else if(error?.code==="ERR_NETWORK"){
      errorType ="No internet"
  }
  return (
    <div className="w-4/5 rounded-sm bg-primary-light px-5 py-10 lg:p-10 space-y-4">
        <Link href="/">
            <a className="bg-white/80 px-2 py-1 rounded-md hover:scale-[1.02] hover:bg-white/90 active:scale-90 active:bg-white duration-200 hover:text-primary">Play Snake Game</a>
        </Link>
        <h1>{errorType}</h1>
        <h1>{error?.code}</h1>
   </div>
  )
}

export default LoginError