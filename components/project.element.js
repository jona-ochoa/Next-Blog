import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding: 5rem 1rem;
  width: 100vw;
 
`;

export const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  color: #025893;
  max-width: 313px;
  height: 71px;
  left: 48px;
  top: 957px;
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
  display: flex;
  align-items: center;
`;

export const Card = styled.div`
  width: 300px;
  height: 400px;
  left: 1107px;
  top: 971px;
  background: #ffffff;
  border-radius: 18px;
  padding-left: 1rem;
  padding-top: 1rem;
  justify-content: center;
  margin: 1rem;
  display: inline-table;
  cursor: pointer;
  
&:hover {
  transition: all 0.3s ease-out;
  filter: drop-shadow(0px 4px 29px rgba(0, 0, 0, 0.25));
} 

@media only screen and (max-width:1024px) {
  width: 280px;
  height: 450px;
  
}

@media only screen and (max-width:760px) {
  width: 220px;
  height: 500px;
  
}

`;

export const Subtitle = styled.h2`
  color: #025893;
`;

export const Topline = styled.p`
  width: 221px;
  height: 71px;
  left: 73px;
  top: 1203px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #043f67;

  @media only screen and (max-width:760px) {
  width: 150px;
  height: 71px;
}
`;
