import React, {useState, useEffect} from 'react';
import Logo from '../../assets/images/logo.png'
import Hamburger from '../../assets/svg/bar.svg'
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../../utils/sidebarData';
import { Link } from 'react-router-dom';

import './navbar.css'

const Navbar = (props) => {
    const [backgroundOn, setBackgroundOn] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    

    const handleScroll = () => {
        const position = window.pageYOffset;
        position > 375 ? setBackgroundOn(true) : setBackgroundOn(false)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    

    return (
        <>
        <header className={`nav-header sticky-top ${ backgroundOn ? "bg-black" : null}`}>
            <nav className="container-fluid d-flex flex-column flex-md-row justify-content-between">
                    <a className="py-2" href="/">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img src={Logo} alt="Patton U Logo" width="150px"/>
                            <h2 className="logo-title"><span>PATTON</span> <br/><span>UNIVERCITY</span> </h2>
                        </div>
                    </a>
                {
                    props.authenticated ? <a href="/dashboard">Dashboard</a>
                        :
                        null
                }

                {props.authenticated ?
                    <>
                        <a href="/education">Education</a>
                        <a href="/research">Research</a>
                        <a href="/innovation">Innovation</a>
                        <a href="/news">News</a>
                        <a href="/Alumni">Alumni</a>
                        <Link style={{ color: "white"}} onClick={props.logout}>Logout</Link>
                    </>
                    :
                    <>
                        <a href="/login" style={{ color: "white" }}>Login</a>
                        <a href="/signup">Signup</a>
                    </>
                }
            </nav>
            <div class="mobile-overlay" >
                    <div class="main-nav-mobile">
                        <img id="mobile-logo" src={Logo} alt="Logo" />
                        <img id="hamburger" src={Hamburger} alt="Hamburger bar" onClick={showSidebar}/>
                    </div>
                    <div className={sidebar ? 'nav-menu active' : 'nav-menu'}  >
                        <ul className='nav-menu-items' onClick={showSidebar} style={{ backgroundColor: 'black'}}>
                            <li className='navbar-toggle' style={{ backgroundColor: 'black' }}>
                            <Link to='#' className='menu-bars' >
                                <AiIcons.AiOutlineClose />
                            </Link>
                            <h2 className="logo-title mt-4 " style={{ color: "white", maxHeight: 75, maxWidth: 50 }}><span>PATTON</span> <br/><span>UNIVERCITY</span></h2>
                            </li>
                            {SidebarData.map((link, index) => {
                            return (
                                <li key={index} className={link.cName}>
                                <Link to={link.path}>
                                    {link.icon}
                                    <span>{link.title}</span>
                                </Link>
                                </li>
                            );
                            })}
                        </ul>
                    </div>       
                </div>
        </header>
      </>
    )
}



export default Navbar;
