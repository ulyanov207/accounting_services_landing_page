import React from 'react';
import s from './Сontacts.module.css'
import Rectangle from "../../img/Rectangle1.jpg";
import phone from "../../img/svg/Contacts/Vector.svg";
import number from "../../img/svg/Contacts/number.svg";
import mail1 from "../../img/svg/Contacts/Vector1.svg";
import mail2 from "../../img/svg/Contacts/Vector2.svg";
import email from "../../img/svg/Contacts/email.svg";
import line from "../../img/svg/Contacts/Line.svg";
import line1 from "../../img/svg/Contacts/Line1.svg";
import line2 from "../../img/svg/Contacts/Line2.svg";

const Contacts = () => {
    return (
        <div className={s.wrapper}>
            <img src={Rectangle} alt="Rectangle" className={s.intro_img}/>
            <div className={s.connection}>Связь с нами</div>
            <div className={s.questions}>У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</div>
            <div><img src={phone} alt="phone" className={s.phone}/></div>
            <div><img src={number} alt="number" className={s.number}/></div>
            <div><img src={number} alt="number" className={s.number}/></div>
            <div><img src={mail1} alt="mail1" className={s.mail1}/></div>
            <div><img src={mail2} alt="mail2" className={s.mail2}/></div>
            <div><img src={email} alt="email" className={s.email}/></div>
            <div className={s.name}>Имя</div>
            <div className={s.surname}>Фамилия</div>
            <div className={s.name_name}>Иван</div>
            <div className={s.surname_surname}>Иванов</div>
            <div><img src={line} className={s.line}/></div>
            <div><img src={line1} className={s.line1}/></div>
            <div className={s.message}>Сообщение</div>
            <div className={s.your_message}>Ваше сообщение</div>
            <div><img src={line2} className={s.line2}/></div>
            <button className={s.send_message}>Отправить сообщение</button>
        </div>
    );
};

export default Contacts;