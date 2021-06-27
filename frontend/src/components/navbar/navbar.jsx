import React, {useState, useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaBars} from 'react-icons/fa';
import Logo from '../../assets/svg/Untitled design.svg';
import { Link } from 'react-router-dom';
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks
} from './navbarElements';

  const Navbar = ({ toggle }, props) => { 
  // const Navbar = (props) => {   
    const [backgroundOn, setBackgroundOn] = useState(false);

  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);
  // }, []);

  const toggleHome =() => {
    scroll.scrollToTop();
  };


  const handleScroll = () => {
    const position = window.pageYOffset;
    position > 375 ? setBackgroundOn(true) : setBackgroundOn(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Nav className={`${backgroundOn ? 'bg-black' : null}`}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
          {/* if logo width gets too small, white borders emerge around the navbar */}
            <img src={Logo} alt="Patton U Logo" width={155}/>
              <span>
                <h1 className={`${ backgroundOn ? "bg-black" : null}`}>PATTON</h1> 
                <h4 className={`${ backgroundOn ? "bg-black" : null}`}>UNIVERCITY</h4>
              </span>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
          {props.authenticated ? <NavLinks to="/home">Home</NavLinks> : null}
          {props.authenticated ?
            <>
              <NavItem><NavLinks className={`${ backgroundOn ? "bg-black" : null}`} to="/education">Education</NavLinks></NavItem>
              <NavItem><NavLinks className={`${ backgroundOn ? "bg-black" : null}`} to="/research">Research</NavLinks></NavItem>
              <NavItem><NavLinks className={`${ backgroundOn ? "bg-black" : null}`} to="/innovation">Innovation</NavLinks></NavItem>
              <NavItem><NavLinks className={`${ backgroundOn ? "bg-black" : null}`} to="/news">News</NavLinks></NavItem>
              <NavItem><NavLinks className={`${ backgroundOn ? "bg-black" : null}`} to="/alumni">Alumni</NavLinks></NavItem>
              <Link className={`${ backgroundOn ? "bg-black" : null}`} onClick={props.logout}>Logout</Link>
            </>
            :
            <>
              <NavItem><NavLinks to="/login">Login</NavLinks></NavItem>
              <NavItem><NavLinks to="/signup">Signup</NavLinks></NavItem>
            </>
          }
          </NavMenu>
           {/* <NavMenu>
            
            <NavItem><NavLinks 
             to="/education" smooth={true} duration={500} spy={true} exact="true">Education
              </NavLinks></NavItem>
            <NavItem><NavLinks 
              to="/research" smooth={true} duration={500} spy={true} exact="true">Research
              </NavLinks></NavItem>
            <NavItem><NavLinks 
              to="/innovation" smooth={true} duration={500} spy={true} exact="true">Innovation
              </NavLinks></NavItem>
            <NavItem><NavLinks 
              to="/news" smooth={true} duration={500} spy={true} exact="true">News
              </NavLinks></NavItem>
            <NavItem><NavLinks 
              to="/alumni" smooth={true} duration={500} spy={true} exact="true">Alumni
              </NavLinks></NavItem>
            <NavItem><NavLinks 
              to="/logout" smooth={true} duration={500} spy={true} exact="true">Logout 
              </NavLinks></NavItem>
            <NavItem><NavLinks 
              to="/signup" smooth={true} duration={500} spy={true} exact="true">Signup
            </NavLinks></NavItem>  
            <NavItem><NavLinks 
              to="/login" smooth={true} duration={500} spy={true} exact="true">Login
            </NavLinks></NavItem>
          </NavMenu>  */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
