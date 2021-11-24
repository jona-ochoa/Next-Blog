import styled from "styled-components";
import Image from "next/image";

const Container = styled.section`
  width: 100%;
  height: 100%; 
  background: #ff6961;
  display: flex;
  padding: 1rem 1rem;
`;
const Card = styled.div`
  flex: 1;
  padding: 0px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
`;

const BGimage = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const IndexH1 = styled.h1`
  font-family: " Poppins", sans-serif;
  font-weight: 900;
  font-size: 64px;
  align-items: center;
  color: #fff;
`;

const Descrip = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #000;
  font-size: 18px;
  line-height: 44px;
  max-width: 350px;
`;

export default function Home() {
  return (
    <>
      <Container>
        <Card>
          <IndexH1>Code Example Page </IndexH1>
          <Descrip>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500.
          </Descrip>
        </Card>
        <Card>
          <BGimage>
            <Image
              src="/images/index.svg"
              width="100%"
              height="100%"
              layout="fill"
              alt="Jonatan Ochoa"
            />
          </BGimage>
        </Card>
      </Container>
    </>
  );
}
