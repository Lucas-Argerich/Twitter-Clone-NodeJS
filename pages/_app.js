import '../styles/globals.css'
import Head from 'next/head'
import AppLayout from '../containers/AppLayout'
import '../firebase/client'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TwiThor</title>
        <meta name="description" content="Twitter Clone with NextJS" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default App
