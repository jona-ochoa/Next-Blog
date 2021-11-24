import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Head>
          <title>Jona-web</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
       <main> {children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
