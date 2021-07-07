import styled from 'styled-components';
import { Link as LinkS} from 'react-scroll';
import { Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const SidebarHeader = styled.div`
  padding-top: 20px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-family: 'Monday';
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    max-height: 75;
    max-width: 50;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarSpan = styled.div`
  margin-left: 14px; /* put space between menu icons and titles */
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  margin-top: -140px; /* move links up */
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 60px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(8, 60px);
  }
`;  

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    color: #8e8e8e;
    transition: 0.2s ease-in-out;
  }
`;

export const MobileOverlay = styled.div`
  width: 100vw;
  margin-left: auto;
`;

export const SidebarRoute = styled(LinkR)`
  display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 58px 0px 8px 16px;
    list-style: none;
    height: 4rem;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #fff;
    
    &:hover {
      transition: all 0.2s ease-in-out;
      color: #8e8e8e;
    }
`;

