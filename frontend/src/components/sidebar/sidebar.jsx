import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './sidebarElements';
import { SidebarData } from '../../utils/sidebarData';
import Logo from '../../assets/svg/Untitled design.svg';
import { NavLogo } from './../navbar/navbarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <NavLogo  to="/">
        <img className="logo" src={Logo} alt="Patton U Logo" width={50}/>
          <h2>
            <span className="logo-line-one">PATTON</span> 
            <br/>
            <span className="logo-line-two">UNIVERCITY</span>
          </h2>
      </NavLogo>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/dashboard" onClick={toggle}>Dashboard</SidebarLink>
          <SidebarLink to="education" onClick={toggle}>Education</SidebarLink>
          <SidebarLink to="research" onClick={toggle}>Research</SidebarLink>
          <SidebarLink to="innovation" onClick={toggle}>Innovation</SidebarLink>
          <SidebarLink to="news" onClick={toggle}>News</SidebarLink>
          <SidebarLink to="alumni" onClick={toggle}>Alumni</SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>Signup</SidebarLink>
          <SidebarLink to="/login" onClick={toggle}>Login</SidebarLink>
          {SidebarData.map((link, index) => {
                return (
                  <li key={index} className={link.cName}>
                    <Link to={link.path}>
                      {link.icon}
                      <span>{link.title}</span>
                    </Link>
                  </li>
                );
              })}
        </SidebarMenu>
        
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
