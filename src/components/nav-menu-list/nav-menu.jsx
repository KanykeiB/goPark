import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import './nav-menu-list.css'

const Nav_menu_list = () => {

    const [openGallery, setOpenGallery] = useState(false)
    const [openTournament, setOpenTournament] = useState(false)
    const [openLessons, setOpenLessons] = useState(false)
    const [openCleaning, setOpenCleaning] = useState(false)
    const [openSports, setOpenSports] = useState(false)
    const [openForKids, setOpenForKids] = useState(false)
    const [openExcursion, setOpenExcursion] = useState(false)

    const openGal = () => {
        setOpenGallery(true)
    }
    const closeGal = () => {
        setOpenGallery(false)
    }

    const openTour = () => {
        setOpenTournament(true)
    }
    const closeTour = () => {
        setOpenTournament(false)
    }

    const openLess = () => {
        setOpenLessons(true)
    }
    const closLess = () => {
        setOpenLessons(false)
    }

    const openClean = () => {
        setOpenCleaning(true)
    }
    const closeClean = () => {
        setOpenCleaning(false)
    }

    const openSport = () => {
        setOpenSports(true)
    }
    const closeSport = () => {
        setOpenSports(false)
    }

    const openKids = () => {
        setOpenForKids(true)
    }
    const closeKids = () => {
        setOpenForKids(false)
    }

    const openExc = () => {
        setOpenExcursion(true)
    }
    const closeExc = () => {
        setOpenExcursion(false)
    }
    const {t} = useTranslation()

    return (
        <div className="header-content-block">
            <div className="content-menu">
                <span onMouseOver={openGal} onMouseOut={closeGal} className="content-item" >{t("exhibitions")}</span>
                <span onMouseOver={openTour} onMouseOut={closeTour} className="content-item">{t("tournaments")}</span>
                <span className="dot"></span>
                <span onMouseOver={openLess} onMouseOut={closLess} className="content-item">{t("lectures")}</span>
                <span onMouseOver={openClean} onMouseOut={closeClean} className="content-item width-word">{t("cleanup")}</span>
                <span onMouseOver={openSport} onMouseOut={closeSport} className='content-item'>{t("sport")}</span>
                <span className="dot"></span>
                <span onMouseOver={openKids} onMouseOut={closeKids} className="content-item">{t("forkids")}</span>
                <span onMouseOver={openExc} onMouseOut={closeExc} className="content-item">{t("excursions")}</span>
            </div>
            <div className="content-img">
                {openGallery ?  <div className="gallery" /> : ""}
                {openTournament ?  <div className="tournament" /> : ""}
                {openLessons ?  <div className="lessons" /> : ""}
                {openCleaning ?  <div className="cleaning" /> : ""}
                {openSports ?  <div className="sport" /> : ""}
                {openForKids ?  <div className="for-kids" /> : ""}
                {openExcursion ?  <div className="excursion" /> : ""}
            </div>
        </div>
    )
}

export default Nav_menu_list;