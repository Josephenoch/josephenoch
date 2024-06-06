import React, { Fragment, ReactNode, FC, Component, } from 'react'
import Layout from '../layouts/ParentLayout/Layout'
import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import Script from 'next/script'
import Head from 'next/head'
import { INewAppProps } from '../interfaces/PageInterfaces'
interface Props {
  children: ReactNode;
}
const MyApp: FC = ({ Component: Comp, pageProps }: INewAppProps) => {

  const EmptyLayout: FC<Props> = ({ children }) =>
    <Fragment>
      {children}
    </Fragment>
  const ChildLayout: typeof Component | FC<Props> = Comp.Layout || EmptyLayout
  return (
    <>

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TNJM6W931M"></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TNJM6W931M');`}
      </Script>
      <Script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></Script>
      <Script src="https://kit.fontawesome.com/b557305bb5.js" crossOrigin="anonymous"></Script>
      <Layout>
        <Head>
          <meta name="description" content="Joseph Enoch a Fullstack developer using React, Next, Node & NestJS" />
          <link rel="icon" href="/favicon.png" />
          <meta name="keywords" content="Reactjs, Django, Javascript, Python, Frontend, Backend, Web, Developer, Joseph Enoch" />
        </Head>

        <ChildLayout>
          <Comp {...pageProps} />
        </ChildLayout>
      </Layout>
    </>

  )


}
export default MyApp
