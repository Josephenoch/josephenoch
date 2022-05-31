import React,{useEffect, useState} from 'react'

import AboutLayout from '../../Layouts/AboutMeLayout/AboutLayout'
import LeftComponent from '../../Components/AboutMe/LeftComponent'
import RightContent from '../../Components/AboutMe/RightContent'
import axios from 'axios'
import SpotifyLogin from '../../Components/AboutMe/Hobbies/SpotifyLogin'

const Hobbies = () => {
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
        "Authorization": "Bearer BQCI6-uAj34VIz_z4rTsCjsAp-4aTOq5FA1d99PvUkAMGhMNyYpJMNbOKH7VVU4Z2lQDRogtIm86x7XuCu-cPmCIT0qd4lXz8aTMudjor63nOIaPywepjhXE8YbW4dLo2g9JeOItqjh28tN5kMz8nu0b0Rq9olPZh-sy-9Pl13PCV8ddow0"
      }
    })
    data.data.items.forEach(item=>console.log(item.description))
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
          <aside className="h-full border-r-2 border-t-2 border-lines mt-8 py-5 px-7  overflow-y-auto scrollbar text-secondary text-sm">
            <SpotifyLogin/>
          </aside>
        </section>
    </>
      
  )
}

Hobbies.Layout = AboutLayout

export default Hobbies