import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Link from "next/link";
import {
  Nav,
  NavMenu,
  Button,
  StyledLink,
  StyledLinkLogo,
  MobileIcon,
  NavItemBtn,
  NavBtn,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeNav();
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav active={scroll} click={click}>
        <StyledLinkLogo>
          <Link href="/" passHref>
            Jona-web
          </Link>
        </StyledLinkLogo>

        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <div>
            <Link href="/" passHref>
              <StyledLink>Home</StyledLink>
            </Link>{" "}
            <Link href="/About" passHref>
              <StyledLink>About</StyledLink>
            </Link>{" "}
            <Link href="/Project" passHref>
              <StyledLink>Project</StyledLink>
            </Link>{" "}
            <Link href="/Example" passHref>
              <StyledLink>Example</StyledLink>
            </Link>{" "}
          </div>
          <NavBtn>
            <NavItemBtn>
              {Button ? (
                <Link href="/" passHref>
                  <Button primary>Sign In</Button>
                </Link>
              ) : (
                <Link href="/" passHref>
                  <Button fontBig primary>
                    Sign In
                  </Button>
                </Link>
              )}
            </NavItemBtn>
          </NavBtn>
        </NavMenu>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
