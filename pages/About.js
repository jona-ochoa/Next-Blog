import { Button } from "../components/Navbar.elements";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.section`
 background: #ff6961;
  min-height: 100vh;
  padding: 2rem 2rem;
  flex: 1;
  display: flex;
`;

const Aboutspan = styled.span`
  color: #000;
`;

const AboutBg = styled.div`
  @media screen and (max-width: 660px) {
    display: none;
  }
`;

const AboutItems = styled.div`
  flex: 1;
  padding: 0px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const TopLine = styled.h5`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 1.5px;
  font-weight: 500;
  color: #000; 
   margin: 0px 10px 0px 20px;
`;

const AboutH1 = styled.h1`
  font-family: " Poppins", sans-serif;
  font-weight: 900;
  color: #fff;
  margin: 0px 0px 20px 17px;
`;

const AboutP = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #fff;
  font-size: 18px;
  margin: 0px 0px 12px 17px;
`;

const AboutBtn = styled.div`
  margin: 10px 10px 20px 17px;
`;



const About = () => {
  return (
    <>
      <Container>
        <AboutItems>
        
          <TopLine>APRENDIENDO NUEVAS TECNOLOGIAS.</TopLine>
          <AboutH1>
            Como <Aboutspan>html css react.js gatsby.js next.js</Aboutspan>.
          </AboutH1>
          <AboutP>
            Otras tecnologias que debes aprender para ser desarrollador de
            software Git, GITHUB, FIGMA, NODE.JS.
          </AboutP>
          <AboutBtn>
            <Link href="/About" passHref>
              <Button primary fontbig>
                HOME
              </Button>
            </Link>{"  "}
            <Link href="/Example" passHref>
              <Button fontbig>SLIDER</Button>
            </Link>
          </AboutBtn>
       
        </AboutItems>
        <AboutItems>
          <AboutBg>
            <Image
              src="/images/undraw.svg"
              alt="About"
              layout="fill"
            />
          </AboutBg>
        </AboutItems>
      </Container>
    </>
  );
};

export default About;
