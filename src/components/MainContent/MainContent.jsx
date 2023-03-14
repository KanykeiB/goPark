import React, { useEffect } from 'react';
import styles from './styles.module.css'
import img1 from '../../shared/img/Cleaning.png'
import img2 from '../../shared/img/sport.png'
import img3 from '../../shared/img/Tournament.png'
import eventOperation from '../../redux/thunk/thunk'
import {useDispatch, useSelector} from "react-redux";
import {eventList, eventLoader, filterEvent} from "../../redux/selectors/selectors";
import SwiperBlock from "../swiper/Swiper";

import {useTranslation} from 'react-i18next';
import {TYPE_OF_FILTER} from '../../redux/reducers/filter-reducer';
import {Link} from "react-router-dom";
import EventLoaderPage from "../../pages/EventPageLoader/EventLoaderPage";

import eventOperations from '../../redux/thunk/thunk'


const MainContent = () => {
    const event = useSelector(eventList)
    const eventLoading = useSelector(eventLoader)
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const filterEventState = useSelector(filterEvent)
    const {getEventList} = eventOperations

    console.log(event, 'event')


    const filterHoney = (honeylistFiltered, filter) => {
        switch (filter) {
            case TYPE_OF_FILTER.SHOW_ALL:
                return filterEventState
            case TYPE_OF_FILTER.SHOW_EXHIBITIONS:

                return filterEventState.filter(event => event.category == 2)
            case TYPE_OF_FILTER.SHOW_TOURNAMENTS:

                return filterEventState.filter(event => event.category == 3)

            case TYPE_OF_FILTER.SHOW_EXHIBITIONS:

                return filterEventState.filter(event => event.category == 4)
            case TYPE_OF_FILTER.SHOW_LECTURES:

                return filterEventState.filter(event => event.category == 5)
            case TYPE_OF_FILTER.SHOW_CLEAN_UP:

                return filterEventState.filter(event => event.category == 6)
            case TYPE_OF_FILTER.SHOW_SPORTS:

                return filterEventState.filter(event => event.category == 7)
            case TYPE_OF_FILTER.SHOW_FOR_KIDS:

                return filterEventState.filter(event => event.category == 8)
            case TYPE_OF_FILTER.SHOW_EXCURSIONS:

                return honeylistFiltered.filter(event => event.category == 9)


            default:
                return honeylistFiltered
        }
    }
    //
    // useEffect(() => {
    //     dispatch(eventOperation.getEventList())

    //     dispatch(eventOperations.getEventList())

    // }, [])
    // if (eventLoading) {
    //     return <EventLoaderPage/>
    // }

    return (
        <div>
            {/*// {event.map((item) => (*/}
            <div className={styles.content_block}>
                <h1 className={styles.main_title}>{t("upcoming")}</h1>
                <div className={styles.main_content}>
                    <img src={img1} alt=""/>
                    <div className={styles.content_about}>
                        <h2 className={styles.content_title}><Link className={styles.title_link}
                                                                   to='/eventPage'>Выставка</Link></h2>
                        <p className={styles.content_description}>Научитесь видеть прекрасное в двух мазках, или
                            зачем нам
                            современное искусство?</p>
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
                        <div className={styles.apply_event}>
                            <div className={styles.creators}>
                                <div className={styles.creators_icons_parent}>
                                    <span className={styles.creators_icon}></span>
                                    <span className={styles.creators_icon2}></span>
                                    <span className={styles.creators_icon3}></span>
                                </div>
                                <span className={styles.creators_text}>{t("orgs")}</span>
                            </div>
                            <button className={styles.apply_button}>
                                {t("apply")}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.main_content}>
                    <div className={styles.content_about}>
                        <h2 className={styles.content_title}><Link className={styles.title_link}
                                                                   to='/eventPage'>Выставка</Link></h2>
                        <p className={styles.content_description}>Научитесь видеть прекрасное в двух мазках, или
                            зачем нам
                            современное искусство?</p>
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
                        <div className={styles.apply_event}>
                            <div className={styles.creators}>
                                <div className={styles.creators_icons_parent}>
                                    <span className={styles.creators_icon}></span>
                                    <span className={styles.creators_icon2}></span>
                                    <span className={styles.creators_icon3}></span>
                                </div>
                                <span className={styles.creators_text}>{t("orgs")}</span>
                            </div>
                            <button className={styles.apply_button}>
                                {t("apply")}
                            </button>
                        </div>
                    </div>
                    <img src={img2} alt=""/>
                </div>
                <div className={styles.main_content}>
                    <img src={img3} alt=""/>
                    <div className={styles.content_about}>
                        <h2 className={styles.content_title}><Link className={styles.title_link}
                                                                   to='/eventPage'>Выставка</Link></h2>
                        <p className={styles.content_description}>Научитесь видеть прекрасное в двух мазках, или
                            зачем нам
                            современное искусство?</p>
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
                        <div className={styles.apply_event}>
                            <div className={styles.creators}>
                                <div className={styles.creators_icons_parent}>
                                    <span className={styles.creators_icon}></span>
                                    <span className={styles.creators_icon2}></span>
                                    <span className={styles.creators_icon3}></span>
                                </div>
                                <span className={styles.creators_text}>{t("orgs")}</span>
                            </div>
                            <button className={styles.apply_button}>
                                {t("apply")}
                            </button>
                        </div>
                    </div>
                </div>
                <SwiperBlock/>
            </div>
        </div>
    )
};
export default MainContent;