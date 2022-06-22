import React from 'react';
import s from './Clients.module.css'
import Microsoft from "../../img/png/Clients/Microsoft.png";
import Ellipse from "../../img/svg/Clients/Ellipse.svg";
import Ellipse1 from "../../img/svg/Clients/Ellipse1.svg";
import Vector from "../../img/svg/Clients/Vector.svg";
import Vector1 from "../../img/svg/Clients/Vector1.svg";

const Clients = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.wrapper_s}>
                <div className={s.wrapper_block}>
                    <div className={s.clients_our}>Наши клиенты</div>
                    <div className={s.clients_work}>С нами работают</div>
                    <div className={s.microsoft}>
                        <div><img src={Microsoft}/></div>
                        <div><img src={Microsoft}/></div>
                        <div><img src={Microsoft}/></div>
                        <div><img src={Microsoft}/></div>
                    </div>
                    <div className={s.slider_indicators}>
                        <div><img src={Ellipse} className={s.ellipse}/></div>
                        <div><img src={Ellipse} className={s.ellipse}/></div>
                        <div><img src={Ellipse1} className={s.ellipse_active}/></div>
                        <div><img src={Ellipse} className={s.ellipse}/></div>
                    </div>
                </div>
                <div className={s.container_slider}>
                    <a className={s.slider_control_prev} href="#!" role="button">
                        <div><img src={Vector}/></div>
                    </a>
                    <a className={s.slider_control_next} href="#!" role="button">
                        <div><img src={Vector1}/></div>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Clients;