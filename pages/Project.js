import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "../components/Navbar.elements";

const ProContainer = styled.section`
  background: #ff6961;
  min-height: 100vh;
  padding: 4rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  color: #000;
  text-align: center;
`;

function Project() {
  return (
    <>
      <ProContainer>
        <Title>Lorem Ipsum</Title>
        <header className={styles.title}>
          <p className={styles.description}>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue popularizado en los 60s con la
            creación de las hojas Letraset, las cuales contenian pasajes de
            Lorem Ipsum, y más recientemente con software de autoedición, como
            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
            Ipsum.
          </p>
          <Link href="/About" passHref>
              <Button primary fontbig>
                View Home
              </Button>
            </Link>
        </header>
      </ProContainer>
    </>
  );
}
export default Project;
