import React, {useState, useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { SidebarData } from '../../utils/sidebarData';
import Logo from '../../assets/svg/UntitledDesign.svg';
import { 
  SidebarContainer, 
  SidebarHeader, 
  NavLogo,
  Icon, 
  CloseIcon, 
  SidebarSpan, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
  MobileOverlay, 
  SidebarRoute 
} from './sidebarElements';

const Sidebar = ({isOpen, toggle}) => {
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
    <SidebarContainer scrollNav={scrollNav} isOpen={isOpen} onClick={toggle}>
      <SidebarHeader>
        <NavLogo  to="/" onClick={toggleHome}>
          <img src={Logo} alt="Patton U Logo" width={80}/>
            <span>
              <h3>PATTON</h3>
              <h5>UNIVERCITY</h5>
            </span>
        </NavLogo>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
      </SidebarHeader>      
      <MobileOverlay>
        <SidebarWrapper>
        <SidebarMenu>
        {SidebarData.map((link, index) => {
          return (
            <SidebarLink key={index} className={link.cName}>
              <SidebarRoute to={link.path}>
                {link.icon}
                <SidebarSpan>{link.title}</SidebarSpan>
              </SidebarRoute>
            </SidebarLink>
          );
        })}
        </SidebarMenu>
        </SidebarWrapper>
      </MobileOverlay>  
    </SidebarContainer>           
  )
}

export default Sidebar;
