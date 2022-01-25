import { useRouter } from "next/router";
import styled from "styled-components";
import Project from "./Project";
import About from "./About";
import Example from "./Example";
import Navbar from '../components/Navbar';
import Layout from "../components/Layout";

const Container = styled.section`
  background: #949;
  display: flex;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
  
`;
const Card = styled.div`
  flex: 1;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
   padding-left: 0;
  }
`;

const BGimage = styled.div`
   @media screen and (max-width: 660px) {
   max-width: 320px;
  }  

`;

const Title = styled.h1`
  font-family: " Poppins", sans-serif;
  font-weight: 900;
  font-size: 64px;
  align-items: center;
  color: #94b9af;
  @media screen and (max-width: 660px) {
    font-size: 54px;
  }
  @media screen and (max-width: 660px) {
   padding-left: .5rem;
  }  
`;

const Descrip = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #9dd9d2;
  font-size: 18px;
  line-height: 44px;
  @media screen and (max-width: 660px) {
   padding-left: .5rem;
  }  
`;

const Index = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Container>
        <Card>
          <Title>Code Example Page </Title>
          <Descrip>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500.
          </Descrip>
        </Card>
        <Card>
          <BGimage>
            <video autoPlay loop style={{ width: "100%", height: "100%" }}>
              <source src="/video.mp4" />
            </video>
          </BGimage>
        </Card>
      </Container>
      <About />
      <Project />
      <Example />
    </>
  );
};

export default Index;


