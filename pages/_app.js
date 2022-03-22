import { useState } from 'react';
import { MainContext } from '../context/MainContext';
import Layout from '../components/Layout'
import '../styles/global.css';


function MyApp({ Component, pageProps }) {
  const [index, setIndex] = useState(0)
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
