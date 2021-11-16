import Navbar from "./Navbar"
import Head from "next/head"

const Layout = ({ children }) => {
  
  return (
    <>
    <Head>
        <title>Jonatan Ochoa</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar  />
        {children}
        
    </>
  )
}

export default Layout
