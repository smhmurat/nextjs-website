import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer'
import Script from 'next/script';

const Layout = ({ children }) => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <Head>
        <title>Av. Beytullah MURAT | Murat Hukuk ve Danışmanlık</title>
        <meta name="google-site-verification" content="A-wE4tnc_Uzt6duGZyvDtUrBae3SVD1zZtiutF4vuBE" />
        <meta name="description" content="Hukuk Büromuz Kayseri’de kurulu olup, yerli ve yabancı müvekkillerine yurt içi ve yurt dışında hukuk ve danışmanlık hizmeti vermektedir."></meta>
        <meta name="subject" content="hukuk,ceza hukuku,spor hukuku,iş hukuku,aile hukuku,bankacılık hukuku,fikri sinai,ticaret hukuku,eşya hukuku,miras hukuku,borçlar hukuku,sözleşmeler hukuku, insan hakları hukuku"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='mt-[100px] lg:mt-20'>
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
