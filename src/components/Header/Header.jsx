import React from 'react';
import s from './Header.module.css'
import logo from "../../img/svg/Header/logo.svg";
import BuhOne from "../../img/svg/Header/BuhOne.svg";
import phone from "../../img/svg/Header/phone.svg"
import room_phone from "../../img/svg/Header/room_phone.svg"
import watch from "../../img/svg/Header/watch.svg"
import office_hours from "../../img/svg/Header/office_hours.svg"
import mail from "../../img/svg/Header/mail.svg"
import mail_address from "../../img/svg/Header/mail_address.svg"
import location from "../../img/svg/Header/location.svg"
import address from "../../img/svg/Header/address.svg"

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header_logo}>
                <img src={logo} alt="logo" className={s.header_logo_pic}/>
                <img src={BuhOne} alt="BuhOne"/>
            </div>
            <div className={s.contact}>
                <div><img src={phone} alt="phone" className={s.header_phone}/></div>
                <div><img src={room_phone} alt="room_phone" className={s.header_room}/></div>
                <div><img src={watch} alt="watch" className={s.header_watch}/></div>
                <div><img src={office_hours} alt="office_hours"/></div>
                <div><img src={mail} alt="mail" className={s.header_mail}/></div>
                <div><img src={mail_address} alt="mail_address" className={s.header_mail_address}/></div>
                <div><img src={location} alt="location" className={s.header_location}/></div>
                <div><img src={address} alt="address" className={s.header_address}/></div>
            </div>
            <div>
                <ul className={s.header_nav}>
                    <li className={s.header_item}>
                        <a href="#!" className={s.header_link}>Главная</a>
                    </li>
                    <li className={s.header_item}>
                        <a href="#!" className={s.header_link}>услуги</a>
                    </li>
                    <li className={s.header_item}>
                        <a href="#!" className={s.header_link}>кейсы</a>
                    </li>
                    <li className={s.header_item_c}>
                        <a href="#!" className={s.header_link}>о компании</a>
                    </li>
                    <li className={s.header_item}>
                        <a href="#!" className={s.header_link}>контакты</a>
                    </li>
                </ul>
                <div className={s.nav_close}>
                    <span className={s.nav_close_line}></span>
                    <span className={s.nav_close_line}></span>
                </div>
            </div>
            <div className={s.header_burger}>
                <span className={s.burger_line + ' ' + s.burger_line_first}></span>
                <span className={s.burger_line + ' ' + s.burger_line_second}></span>
                <span className={s.burger_line + ' ' + s.burger_line_third}></span>
            </div>
        </div>
    );
};

export default Header;