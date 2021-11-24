import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  height: 100vh;
  background: #ff6961;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export const Aboutspan = styled.span`
  color: #000;
`;

export const AboutBg = styled.div`

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const AboutItems = styled.div`
  flex: 1;
  padding: 10px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;

`;

export const TopLine = styled.h5`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 1.5px;
  font-weight: 500;
  color: #000;
  margin: 40px 10px 0px 20px;

`;

export const AboutH1 = styled.h1`
  font-family: " Poppins", sans-serif;
  font-weight: 900;
  font-size: 64px;
  line-height: 96px;
  align-items: center;
  color: #fff;
  margin: -10px 0px 20px 17px;
`;

export const AboutP = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  font-size: 18px;
  line-height: 27px;
  width: 450px;
  margin: 0px 0px 12px 17px;
`;

export const AboutBtn = styled.div`
  margin: 0px 10px 20px 17px;


`;
