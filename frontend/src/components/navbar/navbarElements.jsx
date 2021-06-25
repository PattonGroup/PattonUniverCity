import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  ${'' /* background: transparent; */}
  height: 160px;
  ${'' /* margin-top: -2% */}
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
    
  @media screen and (max-width: 1100px) {
    transition: 0.8s all ease;
  }
  `;
  
  export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    padding-top: 1%;
    background: gray;
    position: relative;
    backdrop-filter: saturate(180%) blur(20px);
    ${'' /* background-color: transparent; */}
 
    ${'' /* box-shadow: 0px 4px 13px 1px rgb(167 167 167 / 80%); */}
    ${'' /* opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')}; */}
    
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

  export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1000px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #fff;
    }
  `;

  export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    height: 40%;
    ${'' /* margin-right: -22px; */}

    @media screen and (max-width: 1100px) {
      display: none;
    }
  `;
  
  export const NavItem =  styled.li`
    height: 80px;
  `;

  export const NavLinks = styled(LinkS)`
    color: #fff;
    background-color: transparent;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 5rem 3rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.2rem;
          
    &.active {
     border-bottom: 3px solid #01bf71; 
    }
  `;
