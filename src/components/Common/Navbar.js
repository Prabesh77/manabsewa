import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Common.css';
import Overlay from './Overlay';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const handleOpenNav = () => {
		setOpen(!open);
	};
	const navStyle = {
		opacity: open ? '1' : '',
		transfrom: open ? '' : 'translateX(150%)',
		// display: open ? "block" : "none"
	};
	return (
		<>
			<div className="navbar-holder">
				<div className="container">
					<nav className="navbar">
						<div className="logo">
							<Link to="/">
								<img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" />
							</Link>
						</div>
						<ul className="menu" style={navStyle}>
							<li className="menu-items">
								<NavLink to="/" id="nav-link" onClick={() => setOpen(false)}>
									गृह पृष्ठ{' '}
								</NavLink>
							</li>

							<li className="menu-items">
								<NavLink
									to="/about"
									id="nav-link"
									onClick={() => setOpen(false)}
								>
									{' '}
									हाम्रो बारे
								</NavLink>
							</li>

							<li className="menu-items">
								<NavLink
									to="/family"
									id="nav-link"
									onClick={() => setOpen(false)}
								>
									हाम्रो परिवार
								</NavLink>
							</li>

							<li className="menu-items">
								<NavLink
									to="/activities"
									id="nav-link"
									onClick={() => setOpen(false)}
								>
									{' '}
									हाम्रो अभियान
								</NavLink>
							</li>

							{/* <li className="menu-items">
                <NavLink
                  to="/branches"
                  id="nav-link"
                  onClick={() => setOpen(false)}>
                  शाखाहरु
                </NavLink>
              </li> */}

							<li className="menu-items">
								<NavLink to="/aim" id="nav-link" onClick={() => setOpen(false)}>
									उद्देश्य
								</NavLink>
							</li>

							<li className="menu-items">
								<NavLink
									to="/help"
									id="nav-link"
									onClick={() => setOpen(false)}
								>
									सहयोग
								</NavLink>
							</li>

							<li className="menu-items">
								<NavLink
									to="/contact"
									id="nav-link"
									onClick={() => setOpen(false)}
								>
									सम्पर्क
								</NavLink>
							</li>
						</ul>
						<div className="hamburger" onClick={handleOpenNav}>
							<div className="line line-1"></div>
							<div className="line line-2"></div>
							<div className="line line-3"></div>
						</div>
					</nav>
				</div>
			</div>
			<div className="nav-space-holder"></div>
		</>
	);
};

export default Navbar;
