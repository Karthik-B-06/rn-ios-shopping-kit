import '../styles.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from 'next/head';
import Navbar from '../components/sideNavbar';

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>React Native</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar component={<Component {...pageProps} />} />
    </>
  )
}
