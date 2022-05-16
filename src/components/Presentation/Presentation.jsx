import React from 'react';
import s from './Presentation.module.css'
import Rectangle from "./../../img/Rectangle.jpg";


const Presentation = () => {
    return (
        <div>
            <section className={s.intro}>
                <img src={Rectangle} alt="Rectangle" className={s.intro_img}/>
                <h1>Бухгалтерские услуги<br />в Санкт-Петербурге</h1>
            </section>
        </div>
    );
};

export default Presentation;