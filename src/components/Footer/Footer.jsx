import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.footer_a}>2019 (с) Все права защищены. БухОне.ру</div>
            <div className={s.footer_b}>Разработано: BuhOne</div>
        </div>
    );
};

export default Footer;