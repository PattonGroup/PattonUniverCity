import React from 'react';
import { ContentHeader, ContentMenu, ContentLinks, ContentItem } from './contentElements';

const Contentbar = () => {
  return (
    <>
      <ContentHeader>
      
        <ContentMenu>
          <ContentItem><ContentLinks to="/apply">Apply</ContentLinks></ContentItem>
          <ContentItem><ContentLinks to="/visit">Visit</ContentLinks></ContentItem>
          <ContentItem><ContentLinks to="/give">Give</ContentLinks></ContentItem>
          <ContentItem><ContentLinks to="/students">Students</ContentLinks></ContentItem>
          <ContentItem><ContentLinks to="/parents">Parents</ContentLinks></ContentItem>
          <ContentItem><ContentLinks to="/facultyandstaff">Faculty & Staff</ContentLinks></ContentItem>
        </ContentMenu>
      
      </ContentHeader>    
    
    </>
  );
};

export default Contentbar;
