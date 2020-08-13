import "../styles.css";

import Head from "next/head";

import { useState } from "react";
import Navbar from "../src/components/sideNavbar";

export default ({ Component, pageProps }) => {
  const [theme, setTheme] = useState("LIGHT");
  return (
    <html>
      <Head>
        <title>React Native</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-sans">
        <Navbar
          theme={theme}
          setTheme={setTheme}
          component={<Component theme={theme} {...pageProps} />}
        />
      </body>
    </html>
  );
};
