import React from 'react';
import logo from '../images/logo.svg';

const Navbar = () => {

    const toggleNav = () => {
        document.querySelector('.nav-links').classList.toggle('active');
    }

  return (
    <nav className="navbar">
        <div className="brand-logo">
            <img src={logo} alt="brand-logo"/>
        </div>
        <i className="fas fa-bars" id="toggle-nav" onClick = {toggleNav}></i>
        <ul className="nav-links">
            <li className="link">
                <ul className="page-nav-links">
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
            </li>
            <li className="line"></li>
            <li className="link">
                <ul className="user-nav-links">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;