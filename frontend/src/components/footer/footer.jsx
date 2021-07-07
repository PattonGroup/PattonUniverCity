import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-md">
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
          <div className="col-4 col-md">
            <h5>Vist Patton U</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary" href="/">
                  Faculity & Staff
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
            <h5>Departments</h5>
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
              <li>
                <a className="link-secondary" href="/">
                  Blockchain
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-3">
            <p>Houston, Texas</p>
          </div>
          <div className="col-9 col-md">
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
