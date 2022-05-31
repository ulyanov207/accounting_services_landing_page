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
            <div className={s.clients_our}>Наши клиенты</div>
            <div className={s.clients_work}>С нами работают</div>
            <div className={s.microsoft}>
                <div><img src={Microsoft}/></div>
                <div><img src={Microsoft}/></div>
                <div><img src={Microsoft}/></div>
                <div><img src={Microsoft}/></div>
            </div>
            <div>
                <div><img src={Ellipse} className={s.ellipse1}/></div>
                <div><img src={Ellipse} className={s.ellipse2}/></div>
                <div><img src={Ellipse1} className={s.ellipse3}/></div>
                <div><img src={Ellipse} className={s.ellipse4}/></div>
            </div>
            <div>
                <a className={s.slider_control_prev} href="#!" role="button"></a>
                <a className={s.slider_control_next} href="#!" role="button"></a>
                <div><img src={Vector} className={s.vector}/></div>
                <div><img src={Vector1} className={s.vector1}/></div>
            </div>
        </div>
    );
};

export default Clients;