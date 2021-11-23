import Layout from "../components/Layout";
import styled from "styled-components";

const Container = styled.section`
width: 100%;
height: 100vh;
background: #ff6961;
`

export default function Home() {
  return (
    <Layout>
    
      <Container>Hello Word</Container>
    </Layout>
  );
}
