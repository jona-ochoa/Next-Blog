import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  background: #392F5A;
  color: #9DD9D2;
  display: flex;
  justify-content: space-between;
  /* padding: 0.5rem 0.5rem; */
  position: relative;
  z-index: 999;
`;

export const StyledLinkLogo = styled.div`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  white-space: nowrap;
  font-weight: 900;
  color: #9DD9D2;
  font-family: "Nova Cut", cursive;

  &:hover {
    color: #fff;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 760px) {
    border: none;
  }
`;

export const StyledLink = styled.a`
  font-family: "Poppins", sans-serif;
  margin: 1rem;
  white-space: nowrap;
  size: 14px;
  font-weight: 500;
  color: #9DD9D2;

  &:hover {
    color: #fff;
    border-bottom: 2px solid #fff;

    width: max-content;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    color: #fff;
    padding: 0.5rem 0.5rem;
    font-size: 20px;
    width: 100%;
    display: table;
    font-weight: 400;
    margin: 0;
    &:hover {
      color: #9DD9D2;
      transition: all 0.5s ease-out;
      font-size: 25px;
      border-bottom: none;
    }
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  list-style: none;
  background: ${({ primary }) => (primary ? "#392f5a" : "#392F5A")};
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
    background: ${({ primary }) => (primary ? "#000" : "#5ac")};
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
    background: #222;
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
    background: #ff6;
  }
`;
