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
            <div className={s.reviews}>Отзывы</div>
            <div className={s.thanks}>Ваши благодарности</div>
            <div className={s.reviews_text}>
                <div className={s.text}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem
                    Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
                    безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
                    распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                </div>
                <div><img src={Avatar} className={s.reviews_avatar}/></div>
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

export default Reviews;