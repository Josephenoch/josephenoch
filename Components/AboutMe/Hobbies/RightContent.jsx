import React from 'react'
import { useSpotifyContext } from '../../../Contexts/SpotifyContext'
import SpotifyLogin from './SpotifyLogin'
import Playlist from "./Playlist"

const RightContent = () => {
  const {loggedIn, playlists, handleLogIn} = useSpotifyContext()
  return (
        <>
            {
                loggedIn?
                    playlists.map(playlist=><Playlist key={playlist.id} playlist={playlist}/>):
                    <SpotifyLogin handleLogIn={handleLogIn}/>
            }
        </>
  )
}

export default RightContent