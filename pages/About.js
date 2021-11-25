import { Button } from "../components/Navbar.elements";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  AboutItems,
  Aboutspan,
  TopLine,
  AboutH1,
  AboutP,
  AboutBtn,
  AboutBg,
} from "../components/About.elements";

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
                View Home
              </Button>
            </Link>
            {"  "}
            <Link href="/Example" passHref>
              <Button fontbig>Slider Example</Button>
            </Link>
          </AboutBtn>
        </AboutItems>
        <AboutItems>
          <AboutBg>
            <Image src="/images/undraw.svg" alt="About" layout="fill" />
          </AboutBg>
        </AboutItems>
      </Container>
    </>
  );
};

export default About;
