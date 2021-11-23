import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Head>
          <title>JonaCode</title>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Navbar />
       <main> {children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
