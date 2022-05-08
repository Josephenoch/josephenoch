import { Layout } from '../Layouts/ParentLayout/Layout'
import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'

function MyApp({ Component, pageProps }) {
  const ChildLayout = Component.Layout || EmptyLayout
  return (
    <Layout>
      <ChildLayout>
        <Component {...pageProps} />
      </ChildLayout>
    </Layout>
  )
    

}
const EmptyLayout = ({children}) => <>{children}</>
export default MyApp
