import '../styles.css';

import Head from 'next/head';
import Navbar from '../components/sideNavbar';

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>React Native</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='font-sans'>
        <Navbar component={<Component {...pageProps} />} />
      </body>
    </>
  )
}
