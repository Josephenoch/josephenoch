import Layout from '../Layouts/ParentLayout/Layout'
import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  const ChildLayout = Component.Layout || EmptyLayout
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></Script>  
      <Layout>
        <ChildLayout>
          <Component {...pageProps} />
        </ChildLayout>
      </Layout>
    </>
   
  )
    

}
const EmptyLayout = ({children}) => <>{children}</>
export default MyApp
