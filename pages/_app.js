import '../styles.css';
import Head from 'next/head';

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Shopping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
