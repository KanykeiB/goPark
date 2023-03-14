import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import i18n from '../../18n';
import Nav_menu_list from '../nav-menu-list/nav-menu';
import Toggle from '../Toggle/Toggle';
import './header.css';
import {getToken} from '../../services/token';


const Header = () => {
    const [isAuth, setAuth] = useState(false)

    // const {i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
    const {t} = useTranslation()

    const [menu, setMenu] = useState()

    const DropDownMenu = () => {
        setMenu(!menu)
    }
    useEffect(() => {
        setAuth(getToken())
    }, [])
    return (

        <div className="container">
            <div className="header-title-block">

                <div className="logo-block">
                    <Link to='/' className="logo-img"></Link>
                </div>
                <div className="nav-block">
                    <button onClick={DropDownMenu} className="nav-item-asd">
                        {t("events")}
                        <span className="down-icon"></span>
                    </button>

                    <Link to="/shop" className="shop-icon"></Link>
                    <a className="language-icon">
                        <div className="lang-menu">
                            <button onClick={() => changeLanguage('en')} className="lang-menu-item">🇬🇧</button>
                            <button onClick={() => changeLanguage('ru')} className="lang-menu-item">🇷🇺</button>
                        </div>
                    </a>
                    <div className="toggle-wrap">
                        <Toggle/>
                    </div>
                    <Link to="/forms" className={isAuth ? "login-button-none" : "login-button"}>

                        {/* Войти */}

                        {t("login")}

                        <span className="user-icon"></span>
                    </Link>
                    <Link to="/user" className={isAuth ? "login-button" : "login-button-none"}>
                        Личный кабинет
                        <span className="user-icon"></span>
                    </Link>
                </div>
            </div>
            {menu ? <Nav_menu_list/> : ''}
        </div>
    )
};

export default Header;