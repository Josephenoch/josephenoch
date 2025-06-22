import React,{createContext, useContext, useState, useEffect} from 'react'
import axios from 'axios'

type SpotifyContextType = {
  loggedIn:boolean,
  playlists:any[],
  error:any,
  handleLogIn:()=>void,
  fetchPlaylists: ()=>void
}

export const SpotifyContext = createContext({} as SpotifyContextType)

export const useSpotifyContext = () => {
   return useContext(SpotifyContext)
}

const SpotifyProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [playlists, setPlaylists] = useState<any[]>([])
  const [error, setError] = useState<Error|null>(null)
  const fetchPlaylists = async()=>{
    try{
       const resp = await fetch("/api/spotify/login", {
        headers: new Headers({
          "mode": "no-cors"
        })
       } )
       window.open((await resp.json())?.redirectURL, "_blank")

    }
    catch(err){
      setError(err)
    }
    // setLoggedIn(true)
  }
  const handleLogIn = async() => {
    setLoggedIn(prevState => !prevState)
  }
  
  const value = {
      loggedIn,
      playlists,
      error,
      handleLogIn,
      fetchPlaylists
  }
  return (
    <SpotifyContext.Provider value={value}>
        {children}
    </SpotifyContext.Provider>
  )
}

export default SpotifyProvider