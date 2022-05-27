import React from 'react';
import s from './Presentation.module.css'
import Rectangle from "./../../img/Rectangle.jpg";
import Ellipse from "../../img/svg/presentation/Ellipse.svg"
import Vector1 from "../../img/svg/presentation/Vector1.svg"
import Vector2 from "../../img/svg/presentation/Vector2.svg"


const Presentation = () => {
    return (
        <div className={s.intro}>
            <img src={Rectangle} alt="Rectangle" className={s.intro_img}/>
            <h1>Бухгалтерские услуги<br/>в Санкт-Петербурге</h1>
            <button className={s.presentation}>Наша презентация</button>
            <div>
                <div><img src={Ellipse} className={s.slider_indicators1}/></div>
                <div><img src={Ellipse} className={s.slider_indicators2}/></div>
                <div><img src={Ellipse} className={s.slider_indicators_active}/></div>
                <div><img src={Ellipse} className={s.slider_indicators4}/></div>
            </div>
            <div>
                <a className={s.slider_control_prev} href="#!" role="button"></a>
                <a className={s.slider_control_next} href="#!" role="button"></a>
                <div><img src={Vector1} className={s.vector1}/></div>
                <div><img src={Vector2} className={s.vector2}/></div>
            </div>
        </div>
    );
};

export default Presentation;