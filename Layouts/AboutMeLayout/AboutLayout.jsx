import React from 'react'
import AboutNav  from './AboutNav'
import Head from 'next/head'

const AboutLayout = ({children}) => {
  return (
    <>
      <Head>
          <title>Joseph Enoch | About Me</title>
      </Head>
      <section className="h-full flex  overflow-clip">
        <nav className="w-12 h-full border-r-2 border-r-lines items-center flex flex-col">
          <AboutNav/>
        </nav>
        {children}
        <div className="w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
              <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
                
              </div>
        </div>
      </section>
    </>
  )
}
export default AboutLayout