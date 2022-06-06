import React from 'react'

const SpotifyLogin = ({handleLogIn}) => {
  return (
    <div className='w-full flex items-center font-mono flex-col text-white py-10 space-y-5 bg-primary-light rounded-lg'>
        <span className="text-sm">Login to Spotify to checkout my playlists </span>
        <button onClick={handleLogIn} className='text-lg bg-[#1DB954] hover:bg-[#1DB954]/60 rounded-2xl hover:scale-[1.01] active:scale-90 transition-all duration-100 ease-linear py-2 w-[50%] active:bg-[#1DB954]/80'>Login</button>
    </div>
  )
}

export default SpotifyLogin