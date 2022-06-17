import React from 'react'
import Head from 'next/head'
import Nav from '../Components/Contact/Nav'
import LeftContent from '../Components/Contact/LeftContent'
const ContactMe = () => {
  return (
    <div className="h-full flex min-w-full">  
      <Head>
        <title>Joseph Enoch | Contact</title>
      </Head>
        <Nav/>
        <LeftContent/>
    </div>
  )
}

export default ContactMe