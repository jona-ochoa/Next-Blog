import styles from '../styles/Home.module.css';
import { Button } from '../components/Navbar.elements';
import Layout from '../components/Layout';
import Image from 'next/dist/client/image';
import Hero from './Hero';

export default function Home() {
  return (
    <Layout>
     
        <h1 className={styles.title}>
          Welcome to Jona Developer
        </h1>
      
      <main className={styles.main}>
          <Button>Sign In</Button>
     <div className={styles.footer}>
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
  ) 
}
