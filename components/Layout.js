import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";


const Layout = ({ children }) => {
  return (
    <>
        <Head>
          <title>Jonan</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
       {children}
        <Footer />
    </>
  );
};

export default Layout;
