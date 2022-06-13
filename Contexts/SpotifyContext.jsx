import React,{createContext, useContext, useState, useEffect} from 'react'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../firebase-config'
import axios from 'axios'

export const SpotifyContext = createContext()

export const useSpotifyContext = () => {
   return useContext(SpotifyContext)
}

const SpotifyProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [playlists, setPlaylists] = useState([])
  const [error, setError] = useState({})

  useEffect(()=>{
    const getData = async()=>{
      try{
          const data = await axios({
          method:"get",
          url:"https://api.spotify.com/v1/users/314su7vnojlr2wtq75z2rab6v6te/playlists?offset=0&limit=50",
          headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer BQDNO-PcAsnuD-qmuSMnyV2tE-lkEvOME6KBT1a_VgC-ISHWVNW7z7nCX0Qg0hRYB51196IiYnILkNnRwg4md7BMIQyiLJoLCn3M4n9XxMxVLCzpysD6JsTJvfwP9ZYus6l4egElPKHvMCmbWHAVOyX7Pw1YTmhDetKvltXqEF_U4LuCfPE"
          }
        })
        const actualData =data.data.items.filter(item=>item.collaborative===true||item.owner.id==="314su7vnojlr2wtq75z2rab6v6te")
        setPlaylists([...actualData])

      }
    catch(err){
      setError(err)
    }
    }
    getData()
  },[])
  const handleLogIn = async() => {
    setLoggedIn(prevState => !prevState)

  }
  const value = {
      loggedIn,
      playlists,
      handleLogIn,
      error
  }
  return (
    <SpotifyContext.Provider value={value}>
        {children}
    </SpotifyContext.Provider>
  )
}

export default SpotifyProvider