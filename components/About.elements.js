import styled from "styled-components";

export const Container = styled.section`
 background: #456645;
  min-height: 100vh;
  padding: 2.5rem .5rem;
  flex: 1;
  display: flex;
  overflow: hidden;
`;

export const Aboutspan = styled.span`
  color: #000;
`;

export const AboutBg = styled.div`
  @media screen and (max-width: 660px) {
    display: none;
  }
`;

export const AboutItems = styled.div`
  flex: 1;
  padding: 0px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const TopLine = styled.h5`
  font-size: 20px;
  line-height: 30px;
  font-size: 16px;
  letter-spacing: 1.5px;
  font-weight: 500;
  color: #000; 
   margin: 0px 10px 0px 20px;
`;

export const AboutH1 = styled.h1`
  font-family: " Poppins", sans-serif;
  font-weight: 900;
  font-size: 46px;
  color: #fff;
  margin: 0px 0px 20px 17px;
`;

export const AboutP = styled.p`
  font-family: " Poppins", sans-serif;
  color: #fff;
  font-weight: 300;
  font-size: 15px;
  margin: 0px 0px 12px 17px;
`;

export const AboutBtn = styled.div`
  margin: 10px 10px 20px 17px;
`;
