import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Image from "next/dist/client/image";
import { Button } from "../components/Navbar.elements";

export default function About() {
  return (
    <Layout>
      <main className={styles.main}>
        <h2 className={styles.title}>This is About</h2>
        <Button>
          Sign In
        </Button>
        <div className={styles.container}>
          
     <Image
    src="/images/Group 17.png" 
    height={150} 
    width={150}
    alt="Jonatan Ochoa"
  />
   <Image
    src="/images/Group 16.png" 
    height={150} 
    width={150}
    alt="Jonatan Ochoa"
  /> <Image
  src="/images/Group 15.png" 
  height={150} 
  width={150}
  alt="Jonatan Ochoa"
/> <Image
    src="/images/Group 14.png" 
    height={160} 
    width={160}
    alt="Jonatan Ochoa"
  />
     </div>
      </main>
    </Layout>
  );
}
