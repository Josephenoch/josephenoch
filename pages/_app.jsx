import React, { Suspense } from 'react'
import Layout from '../Layouts/ParentLayout/Layout'
import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import Script from 'next/script'
import Head from 'next/head'
import ProjectProvider from '../Contexts/ProjectContext'
import PersonalInfoProvider from '../Contexts/PersonalInfoContext'
import ProfessionalInfoProvider from '../Contexts/ProfessionalInfoContext'

function MyApp({ Component, pageProps }) {
  const ChildLayout = Component.Layout || EmptyLayout
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></Script>  
      <Script src="https://kit.fontawesome.com/b557305bb5.js" crossorigin="anonymous"></Script>
      <Layout>
      <Head>
        <meta name="description" content="Joseph Enoch's Porfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>

        <ChildLayout>
            <ProjectProvider>
              <PersonalInfoProvider>
                <ProfessionalInfoProvider>
                  <Component {...pageProps} />
                </ProfessionalInfoProvider>
              </PersonalInfoProvider>
            </ProjectProvider>
        </ChildLayout>
      </Layout>
    </>
   
  )
    

}
const EmptyLayout = ({children}) => <>{children}</>
export default MyApp
