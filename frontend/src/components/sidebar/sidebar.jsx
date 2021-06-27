import React from 'react';
import { SidebarData } from '../../utils/sidebarData';
import Logo from '../../assets/svg/Untitled design.svg';
import { NavLogo } from '../navbar/navbarElements';
import { 
  SidebarContainer, 
  SidebarHeader, 
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
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarHeader>
        <NavLogo  to="/">
          <img className="logo" src={Logo} alt="Patton U Logo" width={80}/>
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
