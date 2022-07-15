import React,{createContext, useContext, useState, useEffect} from 'react'
import axios from 'axios'

interface contextValue {
  loggedIn:boolean,
  playlists:any[],
  error:any,
  handleLogIn():void,
  getData():void
}

export const SpotifyContext = createContext<contextValue>({
  loggedIn:false,
  playlists:[],
  error:false,
  handleLogIn:()=>{},
  getData:()=>{}
})

export const useSpotifyContext = () => {
   return useContext(SpotifyContext)
}

const SpotifyProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [playlists, setPlaylists] = useState<any[]>([])
  const [error, setError] = useState<Error|null>(null)
  const getData = async()=>{
    try{
        const data = await axios({
        method:"get",
        url:"BQDpA6TKxyEqbB_FFgHs2mhPTfxbiIJUxCWe28FRJH7iFNxm1uFqA7ZNMXkyEodsuaqpW1VrFcIEyPverrGI2CyA0a5eKQftJ_dpwrRP4mpp_iHW0RlQj8TuHPmktZA8TQtnHjrVwSXfnc4Y3jXlht52CUV7qTvBHGbKbJhNrSn4GVexeD8N7LibL9kYJrbAB5k_7M0JXkjqpr_B_KFwCjk",
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
  useEffect(()=>{ 
    getData()
  },[])
  const handleLogIn = async() => {
    setLoggedIn(prevState => !prevState)
  }
  
  const value = {
      loggedIn,
      playlists,
      error,
      handleLogIn,
      getData
  }
  return (
    <SpotifyContext.Provider value={value}>
        {children}
    </SpotifyContext.Provider>
  )
}

export default SpotifyProvider