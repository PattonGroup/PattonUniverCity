import React, {useState, useEffect} from 'react';
import Logo from '../../assets/images/logo.png'
import Hamburger from '../../assets/svg/bar.svg'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
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
            <nav className="container-fluid d-flex flex-column flex-md-row justify-content-between ">
                    <a className="py-2" href="/" >
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img src={Logo} alt="Patton U Logo" width="150px"/>
                            <h2 className="logo-title"><span>PATTTON</span> <br/><span>UNIVERCITY</span> </h2>
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
                        <a style={{ color: "white" }} onClick={props.logout}>Logout</a>
                    </>
                    :
                    <>
                        <a href="/login" style={{ color: "white" }}>Login</a>
                        <a href="/signup">Signup</a>
                    </>
                }
            </nav>
            <div class="mobile-overlay">
                    <div class="main-nav-mobile">
                        <img id="mobile-logo" src={Logo} alt="Logo" />
                        <img id="hamburger" src={Hamburger} alt="Hamurger bar" onClick={showSidebar}/>
                    </div>
                    <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
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
