import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Av. Beytullah MURAT | Murat Hukuk ve Danışmanlık</title>
        <meta name="google-site-verification" content="A-wE4tnc_Uzt6duGZyvDtUrBae3SVD1zZtiutF4vuBE" />
        <meta name="description" content="Hukuk Büromuz Kayseri’de kurulu olup, yerli ve yabancı müvekkillerine yurt içi ve yurt dışında hukuk ve danışmanlık hizmeti vermektedir."></meta>
        <meta name="subject" content="hukuk,ceza hukuku,spor hukuku,iş hukuku,aile hukuku,bankacılık hukuku,fikri sinai,ticaret hukuku,eşya hukuku,miras hukuku,borçlar hukuku,sözleşmeler hukuku, insan hakları hukuku"></meta>
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
