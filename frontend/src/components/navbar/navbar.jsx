import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import Logo from '../../assets/svg/Untitled design.svg';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './navbarElements';
import {animateScroll as scroll} from 'react-scroll';
import './navbar.css';

 const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome =() => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
          {/* if logo width gets too small, white borders emerge around the navbar */}
            <img src={Logo} alt="Patton U Logo" width={155}/>
              <span>
                <h1>PATTON</h1> 
                <h4>UNIVERCITY</h4>
              </span>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem><NavLinks 
              to="/home" smooth={true} duration={500} spy={true} exact="true">Home
            </NavLinks></NavItem>
            <NavItem><NavLinks 
             to="education" smooth={true} duration={500} spy={true} exact="true">Education
              </NavLinks></NavItem>
            <NavItem><NavLinks 
              to="research" smooth={true} duration={500} spy={true} exact="true">Research
              </NavLinks></NavItem>
            <NavItem><NavLinks 
              to="innovation" smooth={true} duration={500} spy={true} exact="true">Innovation
              </NavLinks></NavItem>
            <NavItem><NavLinks 
              to="news" smooth={true} duration={500} spy={true} exact="true">News
              </NavLinks></NavItem>
            <NavItem><NavLinks 
              to="alumni" smooth={true} duration={500} spy={true} exact="true">Alumni
              </NavLinks></NavItem>
            <NavItem><NavLinks 
              to="signup" smooth={true} duration={500} spy={true} exact="true">Signup
              </NavLinks></NavItem>
            <NavItem><NavLinks 
              to="/login" smooth={true} duration={500} spy={true} exact="true">Login
            </NavLinks></NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
