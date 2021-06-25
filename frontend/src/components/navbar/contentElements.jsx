import styled from 'styled-components';

export const ContentHeader = styled.nav`
  background-color: rgba(0, 0, 0);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  font-size: 1.5rem;
  height: 6rem;  
  color: #fff;
  transition: color 0.15s ease-in-out;
  padding-right: 1%;
`;

export const ContentContainer = styled.div`
  display: flex-row;
  justify-content: space-between;
  margin-left: 480px; 
`;

export const ContentMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    text-align: center;
    

    @media screen and (max-width: 1100px) {
      display: none;
    }
`;

// export const ContentItem = styled.li`
//   text-decoration: none;
//   font-size: 1.2rem;
//   color: #fff;
//   transition: color 0.15s ease-in-out;

//   &:hover {
//     color: #8e8e8e;
//     text-decoration: none;
//     transition: 0.2s ease-in-out;
//   }
// `;

export const ContentLinks = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  ${'' /* margin: 15px auto 15px auto;  */}
  margin-left: auto !important;
  text-decoration: none;
  font-size: 1.2rem;  
  padding-top: 3%;
  

  &:hover {
    color: #8e8e8e;
    text-decoration: none;
  }
`;