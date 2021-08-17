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
                <a className="link-secondary" href="/comingsoon">
                  Academic Calendar
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/comingsoon">
                  Developers
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/comingsoon">
                  Blockchain
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/comingsoon">
                  Leadership
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/comingsoon">
                  Careers
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/comingsoon">
                  Events
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/comingsoon">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3 col-md">
            <h5>Vist Patton U</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary" href="/comingsoon">
                  Faculty & Staff
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/comingsoon">
                  Support Center
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/comingsoon">
                  FAQ
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/comingsoon">
                  Alumni
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/comingsoon">
                  Privacy
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/comingsoon">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-md">
            <h5 data-testid="header3-footer">Departments</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary" href="/comingsoon">
                  Business
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/comingsoon">
                  Education
                </a>
              </li>
              <li>
                <a className="link-secondary" href="/comingsoon">
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
              <a className="link-secondary" href="/comingsoon">
                {' '}
                Univercity Privacy |{' '}
              </a>
            </span>
            <span>
              <a className="link-secondary" href="/comingsoon">
                {' '}
                Terms |{' '}
              </a>
            </span>
            <span>
              <a className="link-secondary" href="/comingsoon">
                {' '}
                Copyright |{' '}
              </a>
            </span>
            <span>
              <a className="link-secondary" href="/comingsoon">
                {' '}
                Site Information |{' '}
              </a>
            </span>
            <span>
              <a className="link-secondary" href="/comingsoon">
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
