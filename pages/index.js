import { useRouter } from "next/router";
import styled from "styled-components";
import Project from "./Project";
import About from "./About";
import Example from "./Example";

const Container = styled.section`
  width: 100%;
  height: 100%;
  background: #949;
  display: flex;
  overflow: hidden;
  position: relative;
`;
const Card = styled.div`
  flex: 1;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const BGimage = styled.div`
  right: 0;
  @media screen and (max-width: 660px) {
    display: none;
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
`;

const Descrip = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #9dd9d2;
  font-size: 18px;
  line-height: 44px;
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
