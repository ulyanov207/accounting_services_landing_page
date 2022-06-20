import React, {useEffect} from 'react';
import s from './Presentation.module.css'
import Rectangle from "./../../img/Rectangle.jpg";
import Ellipse from "../../img/svg/Presentation/Ellipse.svg"
import Vector1 from "../../img/svg/Presentation/Vector1.svg"
import Vector2 from "../../img/svg/Presentation/Vector2.svg"


const Presentation = () => {

    // менее используемый аналог media-queres
    const [mobile, setMobile] = React.useState(false)

    useEffect(() => {
        if (window && window.innerWidth < 1200){
            setMobile(true)
        }
    }, [])

    return (
            <div className={s.intro}>
                <img src={Rectangle} alt="Rectangle" className={s.intro_img}/>
                <div className={s.presentationContainer}>
                    <div className={s.presentationContainerLeft}>
                        <h1 className={s.presentationServices}>Бухгалтерские услуги<br/>в Санкт-Петербурге</h1>
                        <button className={s.presentation}>Наша презентация</button>
                        <div className={s.slider_indicators}>
                            <div><img src={Ellipse} className={s.slider_indicators_inactive}/></div>
                            <div><img src={Ellipse} className={s.slider_indicators_inactive}/></div>
                            <div><img src={Ellipse} className={s.slider_indicators_active}/></div>
                            <div><img src={Ellipse} className={s.slider_indicators_inactive}/></div>
                        </div>
                    </div>
                    <div className={s.presentationContainerRight}>
                        <a className={s.slider_control_prev} href="#!" role="button">
                            <div><img src={Vector1}/></div>
                        </a>
                        <a className={s.slider_control_next} href="#!" role="button">
                            <div><img src={Vector2}/></div>
                        </a>
                    </div>
                </div>
            </div>
    );
};

export default Presentation;