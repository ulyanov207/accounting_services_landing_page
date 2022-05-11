import React from 'react';
import './Header.module.css'
import logo from "../../img/svg/logo.svg";
import BuhOne from "../../img/svg/BuhOne.svg";

const Header = () => {
    return (
            <div className="header">
                <div className="header_logo">
                    <a href="/" className="header_logo-link">
                    <img src={logo} alt="logo" className="header_logo-pic"/>
                        <img src={BuhOne} alt="BuhOne" className="header_BuhOne-pic"/>
                    </a>
                </div>
            </div>
    );
};

export default Header;