import React, { useState, useEffect } from "react";
import Logo from "../../assets/svg/untitled-design.svg";
import Hamburger from "../../assets/svg/bar.svg";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../../utils/sidebarData";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
	const [backgroundOn, setBackgroundOn] = useState(false);
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	const handleScroll = () => {
		const position = window.pageYOffset;
		position > 375 ? setBackgroundOn(true) : setBackgroundOn(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<header
				className={`nav-header sticky-top ${backgroundOn ? "bg-black" : null}`}
				data-testid="header-navbar"
			>
				<nav className="navbar navbar-default navbar-fixed-top">
					<a className="py-5" href="/">
						<div
							style={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<img
								src={"https://i.imgur.com/RF2Zlgb.png"}
								alt="Patton U Logo"
								width="150px"
							/>
							<h2 className="logo-title">
								<span className={`${backgroundOn ? "bg-black" : null}`}>
									PATTON UNIVERCITY
								</span>
								<br />
								<span className={`${backgroundOn ? "bg-black" : null}`}>
									Est. 2015
								</span>
							</h2>
						</div>
					</a>
					{/* {props.authenticated ? <a href="/dashboard">Dashboard</a> : null} */}
					{
						props.authenticated ? (
							<>
								<a
									className={`${backgroundOn ? "bg-black" : null}`}
									href="/education"
								>
									Education
								</a>
								<a
									className={`${backgroundOn ? "bg-black" : null}`}
									href="/research"
								>
									Research
								</a>
								<a
									className={`${backgroundOn ? "bg-black" : null}`}
									href="/innovation"
								>
									Innovation
								</a>
								<a
									className={`${backgroundOn ? "bg-black" : null}`}
									href="/news"
								>
									News
								</a>
								<a
									className={`${backgroundOn ? "bg-black" : null}`}
									href="/Alumni"
								>
									Alumni
								</a>
								{/* <Link className={`${ backgroundOn ? "bg-black" : null}`} onClick={props.logout}>Logout</Link> */}
							</>
						) : null
						// <>
						//   <a href="/login" style={{ color: "white" }}>Login</a>
						//   <a href="/signup">Signup</a>
						// </>
					}
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
					<div className={sidebar ? "nav-menu active" : "nav-menu"}>
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

export default Navbar;
