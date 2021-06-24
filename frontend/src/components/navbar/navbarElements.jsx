import React from 'react';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: black;
  height: 80px;
   /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  `;
  
  export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
  `;

  export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    width: 150px;
  `;

  export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
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
    margin-right: -22px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  `;
  
  export const NavItem =  styled.li`
    height: 80px;
  `;

  export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
     border-bottom: 3px solid #01bf71; 
    }
  `;

// const Contentbar = () => {
//   return (
//     <div className="content-header py-1">
//       <div className="container-fluid d-flex flex-row flex-md-row justify-content-between">
//         <div className="ml-auto content-links">
//           <a className="py-2 d-none d-md-inline-block" href="/apply">
//             Apply
//           </a>
//           <a className="py-2 d-none d-md-inline-block" href="/visit">
//             Visit
//           </a>
//           <a className="py-2 d-none d-md-inline-block" href="/give">
//             Give
//           </a>
//           <a className="py-2 d-none d-md-inline-block" href="/students">
//             Students
//           </a>
//           <a className="py-2 d-none d-md-inline-block" href="/parents">
//             Parents
//           </a>
//           <a className="py-2 d-none d-md-inline-block" href="/faculityandstaff">
//             Faculity &#38; Staff
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

//export default Contentbar;