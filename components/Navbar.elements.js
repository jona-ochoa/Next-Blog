import styled from 'styled-components'

export const Nav = styled.nav`
height: 80px;
background: #025;
color: #fff;
display: flex;
justify-content: space-between;
padding: 0.5rem 0.5rem;
/* z-index: 999; */
`;

export const StyledLinkLogo = styled.a`
align-items: center;
size: 5rem;

@media screen and (max-width: 760px) {
  text-align: center;
  color: #fff;
  width: 100%;
  display: table;
}
`;

export const StyledLink = styled.a`
font-family: "Poppins", sans-serif;
padding: 0rem 1rem;
white-space: nowrap;
size: 14px;
font-weight: 500;

&:hover {
  color: #5ac;
  transition: all 0.5s ease;
}

@media screen and (max-width: 760px) {
  text-align: center;
  color: #fff;
  padding: .5rem .5rem;
  font-size: 30px;
  width: 100%;
  display: table;
  font-weight: 400;

  &:hover {
    color: #5ac;
    transition: all 0.3s ease-out;
    font-size: 35px;
  }
}
`;

export const NavLogo = styled.div`
margin: 0.4rem 1.2rem;
`;

export const Button = styled.button`
border-radius: 10px;
list-style: none;
background: ${({ primary }) => (primary ? "#5ac" : "#025")};
white-space: nowrap;
padding: ${({ big }) => (big ? "6px 16px" : "12px 16px")};
color: #fff;
font-size: ${({ fontBig }) => (fontBig ? "25px" : "20px")};
outline: none;
border: 1px solid #5ac;
font-weight: 400;
cursor: pointer;

&:hover {
  transition: all 0.8s ease-out;
  background: ${({ primary }) => (primary ? "#025" : "#5ac")};
  color: #ffffff;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
/* margin-right: 24px; */

@media screen and (max-width: 760px) {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 80px;
  left: ${({ click }) => (click ? 0 : "-100%")};
  opacity: 1;
  transition: all 0.8s ease;
  background: #025;
}
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 760px) {
  display: block;
  position: absolute;
  top: -0.8rem;
  right: -0.5rem;
  transform: translate(-100%, 60%);
  font-size: 2rem;
  cursor: pointer;
}
`;

export const NavItemBtn = styled.nav`
@media screen and (max-width: 760px) {
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
`;

export const NavBtn = styled.nav`
  display: flex;
align-items: center;
margin-right: 50px;

@media screen and (max-width: 760px) {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: ${({ click }) => (click ? 0 : "-100%")};
  opacity: 1;
  transition: all 0.8s ease;
  background: #028;
}

`;
