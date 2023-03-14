import React from 'react';
import styles from './style.module.css'
import img1 from '../../shared/img/Rectangle1.png'
import {useTranslation} from "react-i18next";


const EventPage = () => {
    const {t} = useTranslation()
    return (
        <div className={styles.container}>
            <div className={styles.main_content_block}>
                <div className={styles.content_block}>
                    <div>
                        <h2 className={styles.title}>Выставка современного искусства </h2>
                        <p className={styles.content}>
                            Научитесь видеть прекрасное в двух мазках, или зачем нам современное искусство? Что такое
                            современное искусство простыми словами?
                            Обычно под современным искусством понимают искусство, восходящее к модернизму, или
                            находящееся в противоречии с этим явлением, отделяя его от понятия «актуальное искусство»,
                            имеющее оценочный, а не хронологический характер. Тем не менее, существует взаимодействие
                            или даже смешение этих понятий. </p>
                    </div>
                    <div>
                        <img src={img1} alt=""/>
                        <div className={styles.date_location}>
                            <div className={styles.date_block}>
                                <span className={styles.date_icon}></span>
                                <span className={styles.date_text}>Март 12, 2023</span>
                            </div>
                            <div className={styles.location_block}>
                                <span className={styles.location_icon}></span>
                                <span className={styles.location_text}>Бишкек, Парк - Ынтымак</span>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className={styles.creators_title}>Организаторы</h2>
                <div className={styles.creators}>
                    <div className={styles.swiper_block}>
                        <div className={styles.swiper_image_block}></div>
                        <div className={styles.border_line}></div>
                        <p className={styles.swiper_text}>Codify Academy</p>
                        <p className={styles.swiper_description}>{t("codifyCEO")}</p>
                        <div className={styles.swiper_contacts}>
                            <span className={styles.swiper_contact}>0500 431 430</span>
                            <span className={styles.swiper_contact}>0500 431 430</span>
                            <span className={styles.swiper_contact}>info@codifylab.com</span>
                        </div>
                    </div>
                </div>
                <div className={styles.button_div}>
                    <button className={styles.send_form}>Подать заявку на участие!</button>
                </div>
            </div>
        </div>
    );
};

export default EventPage;