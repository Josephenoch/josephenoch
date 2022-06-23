import React from "react"
import AboutLayout from '../../Layouts/AboutMeLayout/AboutLayout'
import LeftComponent from '../../Components/AboutMe/LeftComponent'
import SpotifyProvider from '../../Contexts/SpotifyContext'
import RightContent from '../../Components/AboutMe/Hobbies/RightContent'

const Hobbies = () => {
  return (      
      <>
      <LeftComponent pageTitle="hobbies"/>
        <div className="hidden lg:block w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
              <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
              </div>
        </div>
        <section className="w-full lg:w-[41.4%] h-full lg:border-l-2 border-lines">
          <aside className="h-full lg:border-r-2 lg:border-t-2 border-lines mt-8 py-5 px-7 flex flex-col items-center  overflow-y-auto scrollbar-y text-secondary text-sm">
            <SpotifyProvider>
                <RightContent/>
            </SpotifyProvider>
          </aside>
        </section>
    </> 
      
  )
}

Hobbies.Layout = AboutLayout

export default Hobbies