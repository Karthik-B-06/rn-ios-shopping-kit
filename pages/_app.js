import '../styles.css';

import Head from 'next/head';

import Navbar from '../components/sideNavbar';
import { useState } from 'react';


export default ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('LIGHT');
  return (
    <html>
      <Head>
        <title>React Native</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='font-sans'>
        <Navbar theme={theme} setTheme={setTheme} component={<Component theme={theme} {...pageProps} />} />
      </body>
    </html>
  )
}
