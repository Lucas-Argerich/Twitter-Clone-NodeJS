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
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default App
