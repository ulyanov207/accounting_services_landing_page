import React from 'react';
import s from './Header.module.css'
import logo from "../../img/svg/logo.svg";
import BuhOne from "../../img/svg/BuhOne.svg";

const Header = () => {
    return (
            <div className={s.header}>
                <div className={s.headerLogo}>
                    <a href="/" className={s.header_logo_link}>
                    <img src={logo} alt="logo" className={s.header_logo_pic}/>
                        <img src={BuhOne} alt="BuhOne" className={s.header_BuhOne_pic}/>
                    </a>
                </div>
                <nav className={s.header_nav}>
                    <ul className={s.header_list}>
                        <li className={s.header_item}>
                            <a href="#!" className={s.header_link}>Главная</a>
                        </li>
                        <li className="header_item">
                            <a href="#!" className={s.header_link}>услуги</a>
                        </li>
                        <li className="header_item">
                            <a href="#!" className={s.header_link}>кейсы</a>
                        </li>
                        <li className="header_item">
                            <a href="#!" className={s.header_link}>о компании</a>
                        </li>
                        <li className="header_item">
                            <a href="#!" className={s.header_link}>контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
    );
};

export default Header;