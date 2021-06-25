import React from 'react';
import { ContentHeader, ContentContainer, ContentMenu, ContentLinks } from './contentElements';

const Contentbar = () => {
  return (
    <>
      <ContentHeader>
        <ContentContainer>
        <ContentMenu>
          <ContentLinks to="/apply">Apply</ContentLinks>
          <ContentLinks to="/visit">Visit</ContentLinks>
          <ContentLinks to="/give">Give</ContentLinks>
          <ContentLinks to="/students">Students</ContentLinks>
          <ContentLinks to="/parents">Parents</ContentLinks>
          <ContentLinks to="/facultyandstaff">Faculty & Staff</ContentLinks>

          {/* <ContentItem><ContentLinks to="/apply">Apply</ContentLinks></ContentItem>
          <ContentItem><ContentLinks to="/visit">Visit</ContentLinks></ContentItem>
          <ContentItem><ContentLinks to="/give">Give</ContentLinks></ContentItem>
          <ContentItem><ContentLinks to="/students">Students</ContentLinks></ContentItem>
          <ContentItem><ContentLinks to="/parents">Parents</ContentLinks></ContentItem>
          <ContentItem><ContentLinks to="/facultyandstaff">Faculty & Staff</ContentLinks></ContentItem> */}
        </ContentMenu>
        </ContentContainer>
      </ContentHeader>    
    
    </>
  );
};

export default Contentbar;
