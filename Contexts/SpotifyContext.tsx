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
        url:"https://api.spotify.com/v1/users/314su7vnojlr2wtq75z2rab6v6te/playlists?limit=50",
        headers:{
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer BQCwvnKzwrmBXDSRZ2HC5NMjbf1Ml-6nh0lx_obz6SsUYKjKSjtpCkvtRQTpjEv3DzyYLpn0Ayahc4jJEhIla0jBj4DGfsyVT60YqFEqKog7mu67nnl6XnFgOOIxDTlzKI0QW66jU-o9XOIGIv07FoYwzUoREA9s6wq7OdJgSqSWN5nTwD-y7y2MwN2Vv54Ee6nUHI9bnxPg6kc2Gr-vYXkj"
        }
      })
      const actualData =data.data.items.filter(item=>item.collaborative===true||item.owner.id==="314su7vnojlr2wtq75z2rab6v6te")
      console.log(actualData)
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