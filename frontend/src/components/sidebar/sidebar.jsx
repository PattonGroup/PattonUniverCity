import React from 'react';
//import { Link } from 'react-router-dom';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './sidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
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
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
