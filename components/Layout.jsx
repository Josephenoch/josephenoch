import React from 'react'
import { PageTitle } from '../components/PageTitle'

export const Layout = ({children}) => {
  return (
    <div className="bg-primary w-full h-screen flex justify-center items-center">
        <div className="w-11/12 bg-primary-lighter rounded-lg border-lines border-2" style={{height:"90vh"}}>
        <div className="border-b-2 border-b-lines flex">
          <PageTitle pageTitle={"joseph-enoch"} userName={true}/>
          <PageTitle pageTitle={"hello"}/>
          <PageTitle pageTitle={"about-me"}/>
          <PageTitle pageTitle={"projects"}/>
          <PageTitle pageTitle={"contact-me"} contact={true}/>
        </div>
            {children}
        </div>
    </div>    
  )
}
