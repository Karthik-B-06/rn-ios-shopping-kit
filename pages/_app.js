import "../styles.css";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/sideNavbar";

export default ({ Component, pageProps }) => {
  const [theme, setTheme] = useState("LIGHT");
  return (
    <html>
      <Head>
        <title>Shopping Kit</title>
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
