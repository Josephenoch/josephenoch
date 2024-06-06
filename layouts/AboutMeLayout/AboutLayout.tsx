import React, {FC, ReactNode} from 'react'
import AboutNav  from './AboutNav'
import Head from 'next/head'

interface Props {
  children:ReactNode
}

const AboutLayout:FC<Props> = ({children}) => {
  return (
    <>
      <Head>
          <title>Joseph Enoch | About Me</title>
      </Head>
      <section className="h-full flex flex-col lg:flex-row overflow-auto scrollbar-y lg:overflow-clip">
        <AboutNav/>
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