import '../styles.css';
import Head from 'next/head';
import Navbar from '../components/navbar';

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Shopping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
