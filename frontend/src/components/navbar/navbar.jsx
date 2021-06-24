import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
import Logo from '../../assets/svg/Untitled design.svg';
//import Hamburger from '../../assets/svg/bar.svg';
//import * as AiIcons from 'react-icons/ai';
//import { SidebarData } from '../../utils/sidebarData';
//import { Link } from 'react-router-dom';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './navbarElements';

//import './navbar.css';

 const Navbar = ({ toggle }) => {
//   const [backgroundOn, setBackgroundOn] = useState(false);
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   const handleScroll = () => {
//     const position = window.pageYOffset;
//     position > 375 ? setBackgroundOn(true) : setBackgroundOn(false);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo  to="/">
            <img src={Logo} alt="Patton U Logo" width="150px" />
              <h2 className="logo-title">
                <span>PATTON</span> 
                <br/>
                <span>UNIVERCITY</span>
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
