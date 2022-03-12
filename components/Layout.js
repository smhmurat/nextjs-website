import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Av. Beytullah MURAT | Murat Hukuk ve Danışmanlık</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
