import React from 'react'
import AboutNav  from './AboutNav'
import Head from 'next/head'

const AboutLayout = ({children}) => {
  return (
    <>
      <Head>
          <title>Joseph Enoch | About Me</title>
      </Head>
      <section className="h-full flex flex-col lg:flex-row overflow-auto scrollbar-y lg:overflow-clip">
        <nav className="w-full lg:w-12 h-fit lg:h-full lg:border-r-2 border-r-lines justify-around lg:justify-start border-y-2 border-lines lg:border-y-0 lg:items-center flex flex-row lg:flex-col">
          <AboutNav/>
        </nav>
        {children}
        <div className="w-5 lg:block hidden h-full mt-8 px-1 border-t-2 border-t-lines">
              <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
                
              </div>
        </div>
      </section>
    </>
  )
}
export default AboutLayout