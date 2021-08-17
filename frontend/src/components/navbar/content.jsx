import React from 'react';
import './navbar.css';

const Contentbar = () => {
  return (
    <div className="content-header py-1">
      <div className="container-fluid d-flex flex-row flex-md-row justify-content-between">
        <div className="ml-auto content-links">
        <a className="py-2 d-none d-md-inline-block" href="/comingsoon" data-testid="header-about">
            About Us
          </a>
        <a className="py-2 d-none d-md-inline-block" target="__blank" href="https://form.jotform.com/PattonUniverCity/coursecatalog" data-testid="header-register">
            Register
          </a>
        <a className="py-2 d-none d-md-inline-block" href="/comingsoon"  data-testid="header-donate">
            Donate
          </a>
          {/* <a className="py-2 d-none d-md-inline-block" href="/apply">
            Apply
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/visit">
            Visit
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/give">
            Give
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/students">
            Students
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/parents">
            Parents
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/faculityandstaff">
            Faculity &#38; Staff
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contentbar;
