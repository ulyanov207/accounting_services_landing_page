import React from 'react';
import s from './Reviews.module.css'
import Avatar from "../../img/svg/Reviews/reviews_avatar.svg";
import Vector from "../../img/svg/Clients/Vector.svg";
import Vector1 from "../../img/svg/Clients/Vector1.svg";
import Ellipse from "../../img/svg/Clients/Ellipse.svg";
import Ellipse1 from "../../img/svg/Clients/Ellipse1.svg";

const Reviews = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.wrapper_block}>
                <div className={s.reviews}>Отзывы</div>
                <div className={s.thanks}>Ваши благодарности</div>
                <div className={s.reviews_text}>
                    <div className={s.text}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                        Lorem
                        Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
                        безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
                        распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                    </div>
                    <div><img src={Avatar} className={s.reviews_avatar}/></div>
                </div>
            </div>
            <div className={s.slider}>
                <div className={s.slider_indicators}>
                    <div><img src={Ellipse} className={s.ellipse}/></div>
                    <div><img src={Ellipse} className={s.ellipse}/></div>
                    <div><img src={Ellipse1} className={s.ellipse_active}/></div>
                    <div><img src={Ellipse} className={s.ellipse}/></div>
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
    );
};

export default Reviews;