import React from 'react';
import {IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram} from 'react-icons/io'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-3 col-md">
            <h5>Helpful Links</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary" href="/">
                  Academic Calendar
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/developers">
                  Developers
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/blockchain">
                  Blockchain
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/">
                  Leadership
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/">
                  Careers
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/">
                  Events
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3 col-md">
            <h5>Vist Patton U</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary" href="/">
                  Faculty & Staff
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/support">
                  Support Center
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/">
                  Alumni
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/">
                  Privacy
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-md">
            <h5 data-testid="header3-footer">Departments</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary" href="/">
                  Business
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/">
                  Education
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/">
                  Research
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3 col-md">
            <h5>Find Us On</h5>
            <ul className="social">
              <li className="list-inline-item"><a href="https://www.linkedin.com/company/patton-univercity" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin/></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/pattonunivercity/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram/></a></li>
              <li className="list-inline-item"><a href="https://www.facebook.com/pattonuniversity" target="_blank" rel="noopener noreferrer"><IoLogoFacebook/></a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-3">
            <p data-testid="paragraph-footer">Houston, Texas</p>
          </div>
          <div className="col-sm-10">
            <span>
              <a className="link-secondary" href="/">
                {' '}
                Univercity Privacy |{' '}
              </a>
            </span>
            <span>
              <a className="link-secondary" href="/">
                {' '}
                Terms |{' '}
              </a>
            </span>
            <span>
              <a className="link-secondary" href="/">
                {' '}
                Copyright |{' '}
              </a>
            </span>
            <span>
              <a className="link-secondary" href="/">
                {' '}
                Site Information |{' '}
              </a>
            </span>
            <span>
              <a className="link-secondary" href="/">
                {' '}
                Contact{' '}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
