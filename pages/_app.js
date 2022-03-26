import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from '../context/MainContext';
import Layout from '../components/Layout'
import '../styles/global.css';


function MyApp({ Component, pageProps }) {
  const [index, setIndex] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const values = {
    index,
    setIndex
  }
  return (
    <MainContext.Provider value={values}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainContext.Provider>
  )
}

export default MyApp
