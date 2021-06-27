import React from 'react';
//import { Link } from 'react-router-dom';
import { SidebarContainer, SidebarHeader, Icon, CloseIcon, SidebarSpan, SidebarWrapper, SidebarMenu, SidebarLink } from './sidebarElements';
import Logo from '../../assets/svg/Untitled design.svg';
import { NavLogo } from '../navbar/navbarElements';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarHeader>
        <NavLogo  to="/">
          <img className="logo" src={Logo} alt="Patton U Logo" width={100}/>
        </NavLogo>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
      </SidebarHeader>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/home" onClick={toggle}>
            <AiIcons.AiFillHome /><SidebarSpan>Home</SidebarSpan>
          </SidebarLink>
          <SidebarLink to="/education" onClick={toggle}>
            <IoIcons.IoIosPaper /><SidebarSpan>Education</SidebarSpan>
          </SidebarLink>
          <SidebarLink to="/research" onClick={toggle}>
            <IoIcons.IoMdBook /><SidebarSpan>Research</SidebarSpan>
          </SidebarLink>
          <SidebarLink to="/innovation" onClick={toggle}>
            <FaIcons.FaRegLightbulb /><SidebarSpan>Innovation</SidebarSpan>
          </SidebarLink>
          <SidebarLink to="/news" onClick={toggle}>
            <FaIcons.FaEnvelopeOpenText /><SidebarSpan>News</SidebarSpan>
          </SidebarLink>
          <SidebarLink to="/alumni" onClick={toggle}>
            <IoIcons.IoMdPeople /><SidebarSpan>Alumni</SidebarSpan>
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            <IoIcons.IoMdClipboard /><SidebarSpan>Signup</SidebarSpan>
          </SidebarLink>
          <SidebarLink to="/login" onClick={toggle}>
            <IoIcons.IoIosLogIn /><SidebarSpan>Login</SidebarSpan>
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
