import styled from "styled-components";

const FooterH = styled.section`
  display: flex;
  flex: 1;
  background: #000;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1rem;
  color: #ff6961;
  margin: 0;
  line-height: 1.15;
`;

function Footer() {
  return (
    <FooterH>
      <Title>JonaO Develop 2021 All Rigths Reserved</Title>
    </FooterH>
  );
}

export default Footer;
