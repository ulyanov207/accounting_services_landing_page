import React from 'react';
import s from './Services.module.css'
import Rectangle2 from "../../img/Rectangle2.jpg";
import Rectangle3 from "../../img/Rectangle3.jpg";


const Services = () => {
    return (
        <div className={s.services_block}>
            <div className={s.services}>Наши услуги</div>
            <div className={s.specialization}>Мы специализируемся</div>
            <div className={s.services_wrapper}>
                <div className={s.services_item}>
                    <img src={Rectangle2}/>
                    <div className={s.services_text}>Бухгалтерское<br/>обслуживание</div>
                </div>
                <div className={s.services_item}>
                    <img src={Rectangle3}/>
                    <div className={s.services_text}>Бухгалтерское<br/>обслуживание</div>
                </div>
                <div className={s.services_item}>
                    <img src={Rectangle3}/>
                    <div className={s.services_text}>Бухгалтерское<br/>обслуживание</div>
                </div>
                <div className={s.services_item}>
                    <img src={Rectangle3}/>
                    <div className={s.services_text}>Бухгалтерское<br/>обслуживание</div>
                </div>
                <div className={s.services_item}>
                    <img src={Rectangle3}/>
                    <div className={s.services_text}>Бухгалтерское<br/>обслуживание</div>
                </div>
                <div className={s.services_item}>
                    <img src={Rectangle3} />
                    <div className={s.services_text}>Бухгалтерское<br/>обслуживание</div>
                </div>
            </div>
        </div>
    );
};

export default Services;