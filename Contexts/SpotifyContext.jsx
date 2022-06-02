import React,{createContext, useContext, useState, useEffect} from 'react'
import axios from 'axios'

export const SpotifyContext = createContext()

export const useSpotifyContext = () => {
   return useContext(SpotifyContext)
}

const SpotifyProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [playlists, setPlaylists] = useState(false)

  useEffect(()=>{
    const getData = async()=>{
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
    getData()
  },[])
  const handleLogIn = () => {
    setLoggedIn(prevState => !prevState)
  }
  const vale = {
      loggedIn,
      playlists,
      handleLogIn
  }
  return (
    <SpotifyContext.Provider value={vale}>
        {children}
    </SpotifyContext.Provider>
  )
}

export default SpotifyProvider