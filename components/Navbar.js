import { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Link from 'next/link'
import Image from "next/image";
import {
 Nav,
 NavLogo,
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
  }

  useEffect(() => {
    changeNav();
    window.addEventListener("scroll", changeNav);
  }, []);

  return (


    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav active={scroll} click={click}>
        <NavLogo>
            <StyledLinkLogo>
             JONA DEVELOPER
          </StyledLinkLogo>
       
        </NavLogo>

        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <div>
            <Link href="/" passHref>
              <StyledLink>Home</StyledLink>
            </Link>
            <Link href="/About" passHref>
              <StyledLink>About</StyledLink>
            </Link>
            <Link href="/Blogs" passHref>
              <StyledLink>Blogs</StyledLink>
            </Link>
          </div>
      </NavMenu>
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
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
