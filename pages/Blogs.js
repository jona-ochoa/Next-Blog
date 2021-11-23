import Image from 'next/image'
import { BlogContent } from '../components/blog.elements';
import Layout from '../components/Layout'
import styles from "../styles/Home.module.css";



const Blogs = () => (
  <Layout >
    <BlogContent>
  <Image
    src="/images/Group 17.png" 
    height={150} 
    width={150}
    alt="Jonatan Ochoa"
  />
   <div className={styles.card}>
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
     </BlogContent>
</Layout>
)
export default Blogs