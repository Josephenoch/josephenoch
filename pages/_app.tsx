import React, { Fragment, ReactNode,FC, Component, } from 'react'
import Layout from '../Layouts/ParentLayout/Layout'
import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import Script from 'next/script'
import Head from 'next/head'
import { NewAppProps } from '../Interfaces/PageInterfaces'
interface Props {
  children: ReactNode;
}
const  MyApp:FC =({ Component:Comp, pageProps }:NewAppProps) =>{

  const EmptyLayout:FC<Props> = ({children}) => 
      <Fragment>
          {children}
      </Fragment>
  const ChildLayout: typeof Component | FC = Comp.Layout || EmptyLayout
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></Script>  
      <Script src="https://kit.fontawesome.com/b557305bb5.js" crossOrigin="anonymous"></Script>
      <Layout>
      <Head>
        <meta name="description" content="Joseph Enoch is a Fullstack using React and Django. Check out his portfolio" />
        <link rel="icon" href="/favicon.png" />
        <meta name="keywords" content="Reactjs, Django, Javascript, Python, Frontend, Backend, Web, Developer, Joseph Enoch"/>
      </Head>

        <ChildLayout>
            <Comp {...pageProps} />
        </ChildLayout>
      </Layout>
    </>
   
  )
    

}
export default MyApp
