import React from 'react';
import s from './Company.module.css'

const Company = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.text}>О нас</div>
            <div className={s.company}>
                <span>Компания</span>
                <span className={s.company_ivanov}><br/>ИвановПром</span>
            </div>
            <div className={s.text_lorem}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
                распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и
                перешагнул в электронный дизайн.
            </div>
            <div className={s.wrapper_block}>
                <div className={s.block}>
                    <div className={s.counter}>90</div>
                    <div className={s.transaction}>Завершено<br/>крупных сделок</div>
                    <a className={s.cases}>Все кейсы</a>
                </div>
                <div className={s.block}>
                    <div className={s.counter}>90</div>
                    <div className={s.transaction}>Завершено<br/>крупных сделок</div>
                    <a className={s.cases}>Все кейсы</a>
                </div>
                <div className={s.block}>
                    <div className={s.counter}>90</div>
                    <div className={s.transaction}>Завершено<br/>крупных сделок</div>
                    <a className={s.cases}>Все кейсы</a>
                </div>
                <div className={s.block_active}>
                    <div className={s.counter}>90</div>
                    <div className={s.transaction}>Завершено<br/>крупных сделок</div>
                    <a className={s.cases_active}>Все кейсы</a>
                </div>
            </div>
        </div>
    );
};

export default Company;
