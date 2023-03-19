import React from 'react'
import { useSpotifyContext } from '../../../Contexts/SpotifyContext'
import SpotifyLogin from './SpotifyLogin'
import Playlist from "./Playlist"
import LoginError from './LoginError'
const RightContent = () => {
  const {fetchPlaylists, loggedIn, playlists, handleLogIn} = useSpotifyContext()
  
  return (
        <>
          {
              loggedIn?
                  playlists?
                    <>{playlists.map(playlist=><Playlist key={playlist.id} playlist={playlist}/> )}</>:<LoginError/>
                  :
                    <SpotifyLogin handleLogIn={fetchPlaylists}/>
          }
        </>
  )
}

export default RightContent