import React,{useEffect, useState} from 'react'

import AboutLayout from '../../Layouts/AboutMeLayout/AboutLayout'
import LeftComponent from '../../Components/AboutMe/LeftComponent'
import axios from 'axios'
import SpotifyLogin from '../../Components/AboutMe/Hobbies/SpotifyLogin'
import Playlist from '../../Components/AboutMe/Hobbies/Playlist'

const Hobbies = () => {
  const [playlists, setPlaylists] = useState([])
  const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero fugiat ullam, omnis minima officia impedit porro eum cumque voluptatem aspernatur, tenetur qui maiores. Assumenda quibusdam consequuntur maxime accusamus nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero fugiat ullam, omnis minima officia impedit porro eum cumque voluptatem aspernatur, tenetur qui maiores. Assumenda quibusdam consequuntur maxime accusamus nihil."
  const files = [
    {
      folderName:"none",
      pages:[
        {
          title:"music",
          text:text+"music"
        }
      ],
    },{
      folderName:"Sports",
      pages:[
        {
          title:"Table Tennis",
          text:text+"Table Tennis"
        },
        {
          title:"Badmitton",
          text:text+"Badmitton"
        },
        {
          title:"Pool",
          text:text+"Pool"
        },
        {
          title:"Football",
          text:text+"Football"
        }
      ]
    },
  ]
  useEffect(()=>{
    const getData = async()=>{
      const data = await axios({
      method:"get",
      url:"https://api.spotify.com/v1/users/314su7vnojlr2wtq75z2rab6v6te/playlists?offset=0&limit=50",
      headers:{
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer BQDwLMV9VRIxoVtWe2uyejZ0OBTlJ49xLyBKcwvRsXbtHzXoQHY2lwi3JnJ0mhE9Zl_7hEBQ7bSdiAnggiEk05iMezFHY7Ut0YVxT4ThPYy1xce_lAa1qQXJj7boP8FnIfHfjuoI5xr3fVGvoAy1vpA7oGa_wowUXFbGsQop7RA79GE5hGE"
      }
    })
    const actualData =data.data.items.filter(item=>item.collaborative===true||item.owner.id==="314su7vnojlr2wtq75z2rab6v6te")
    setPlaylists([...actualData])
    }
    getData()
  },[])
  return (      
      <>
      <LeftComponent files={files} pageTitle="hobbies"/>
        <div className="w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
              <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
              </div>
        </div>
        <section className="w-[41.4%] h-full border-l-2 border-lines">
          <aside className="h-full border-r-2 border-t-2 border-lines mt-8 py-5 px-7 flex flex-col items-center  overflow-y-auto scrollbar text-secondary text-sm">
            {/* <SpotifyLogin/> */}
            {playlists.map((playlist,index)=><Playlist key={index} playlist={playlist}/>)}
          </aside>
        </section>
    </>
      
  )
}

Hobbies.Layout = AboutLayout

export default Hobbies