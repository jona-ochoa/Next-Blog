import Navbar from "./Navbar";
import Head from "next/head";
import styles from "../styles/layout.module.css";
import Footer from "./Footer";
const Layout = ({ children, home }) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>JonaCode</title>
          <link rel="icon" href="/favicon.svg" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
