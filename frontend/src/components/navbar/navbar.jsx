import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import Logo from '../../assets/svg/Untitled design.svg';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './navbarElements';
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
      <Nav>
        <NavbarContainer>
          <NavLogo  to="/" onClick={toggleHome}>
            <img className="logo" src={Logo} alt="Patton U Logo" width={150}/>
              <h2>
                <span className="logo-line-one">PATTON</span> 
                <br/>
                <span className="logo-line-two">UNIVERCITY</span>
              </h2>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem><NavLinks to="/dashboard">Dashboard</NavLinks></NavItem>
            <NavItem><NavLinks to="education">Education</NavLinks></NavItem>
            <NavItem><NavLinks to="research">Research</NavLinks></NavItem>
            <NavItem><NavLinks to="innovation">Innovation</NavLinks></NavItem>
            <NavItem><NavLinks to="news">News</NavLinks></NavItem>
            <NavItem><NavLinks to="alumni">Alumni</NavLinks></NavItem>
            <NavItem><NavLinks to="signup">Signup</NavLinks></NavItem>
            <NavItem><NavLinks to="/login">Login</NavLinks></NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
