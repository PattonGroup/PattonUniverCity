import styled from 'styled-components';

export const ContentHeader = styled.nav`
  background-color: rgba(0, 0, 0);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  font-size: 1.5rem;
  height: 6rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  align-items: center;
  padding: 10px 0 10px 0;
`;

export const ContentContainer = styled.div`

`;

export const ContentMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    text-align: center;
`;

export const ContentItem = styled.li`
  text-decoration: none;
  font-size: 1.2rem;
  color: #fff;
  transition: color 0.15s ease-in-out;

  &:hover {
    color: #8e8e8e;
    text-decoration: none;
    transition: 0.2s ease-in-out;
  }
`;

export const ContentLinks = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  margin: 15px auto 15px auto; 
  
`;