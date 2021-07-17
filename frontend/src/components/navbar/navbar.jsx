import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../../assets/svg/Untitled design.svg';
import Hamburger from '../../assets/svg/bar.svg';
import * as AiIcons from 'react-icons/ai';
import './navbar.css';
import { SidebarData } from '../../utils/sidebarData';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';

const Header = (props) => {
  const {
    loginWithPopup,
    logout,
    user,
    isAuthenticated,
    loginWithRedirect,
    isLoading,
    error,
  } = useAuth0();
  const [backgroundOn, setBackgroundOn] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleScroll = () => {
    const position = window.pageYOffset;
    position > 375 ? setBackgroundOn(true) : setBackgroundOn(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginWithPopup();
  };
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  const handleSignup = (e) => {
    e.preventDefault();
    loginWithRedirect({
      screen_hint: 'signup',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <header
        className={`nav-header sticky-top ${backgroundOn ? 'bg-black' : null}`}
      >
        <nav className="navbar navbar-default navbar-fixed-top">
          <a className="py-5" href="/">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={'https://i.imgur.com/RF2Zlgb.png'}
                alt="Patton U Logo"
                width="150px"
              />
              <h2 className="logo-title">
                <span className={`${backgroundOn ? 'bg-black' : null}`}>
                  PATTTON
                </span>
                <br />
                <span className={`${backgroundOn ? 'bg-black' : null}`}>
                  UNIVERCITY
                </span>
              </h2>
            </div>
          </a>
          {isAuthenticated ? (
            <>
              <a
                className={`${backgroundOn ? 'bg-black' : null}`}
                href="/education"
              >
                Education
              </a>
              <a
                className={`${backgroundOn ? 'bg-black' : null}`}
                href="/research"
              >
                Research
              </a>
              <a
                className={`${backgroundOn ? 'bg-black' : null}`}
                href="/innovation"
              >
                Innovation
              </a>
              <a className={`${backgroundOn ? 'bg-black' : null}`} href="/news">
                News
              </a>
              <a
                className={`${backgroundOn ? 'bg-black' : null}`}
                href="/Alumni"
              >
                Alumni
              </a>
              <a
                href="/"
                className={`${backgroundOn ? 'bg-black' : null}`}
                onClick={handleLogout}
              >
                Logout
              </a>
            </>
          ) : (
            <>
              <a href="/" onClick={handleLogin} style={{ color: 'white' }}>
                Login
              </a>
              <a href="/" onClick={handleSignup} style={{ color: 'white' }}>
                signup
              </a>
            </>
          )}
        </nav>
        {/* sidebar */}
        <div className="mobile-overlay">
          <div className="main-nav-mobile">
            <img id="mobile-logo" src={Logo} alt="Logo" />
            <img
              id="hamburger"
              src={Hamburger}
              alt="Hamburger bar"
              onClick={showSidebar}
            />
          </div>
          <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <img id="mobile-logo" src={Logo} alt="Logo" />
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((link, index) => {
                return (
                  <li key={index} className={link.cName}>
                    <Link to={link.path}>
                      {link.icon}
                      <span className="sidebar-title">{link.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
