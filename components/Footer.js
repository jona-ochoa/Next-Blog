import styled from "styled-components";

const FooterH = styled.section`
  display: flex;
  flex: 1;
  background: #392F5A;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1rem;
  color: #9DD9D2;
  margin: 0;
`;

function Footer() {
  return (
    <FooterH>
      <Title>
        Codejona 2021 All Rigths Reserved
        </Title>
    </FooterH>
  );
}

export default Footer;
