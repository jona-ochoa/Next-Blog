import { Button } from "../components/Navbar.elements";
import Image from "next/image";
import Link from "next/link";
import {
  AboutBtn,
  AboutContainer,
  AboutH1,
  TopLine,
  AboutBg,
  AboutItems,
  AboutP,
  Aboutspan,
} from "../components/About.elements.js";

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutItems>
          <TopLine>APRENDIENDO NUEVAS TECNOLOGIAS.</TopLine>
          <AboutH1>
            Como <Aboutspan>html css react.js gatsby.js next.js</Aboutspan>.
          </AboutH1>
          <AboutP>
            Otras tecnologias que debes aprender para ser desarrollador de software
            Git, GITHUB, FIGMA, NODE.JS.
          </AboutP>
          <AboutBtn>
            <Link href="/About" passHref>
              <Button primary fontbig>
                HOME
              </Button>
            </Link>
             {" "}
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
            width="100%"
            height="100%"
            layout="fill"
          />
          </AboutBg>
        </AboutItems>
      </AboutContainer>
    </>
  );
};

export default About;
