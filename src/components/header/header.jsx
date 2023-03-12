import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../18n';
import Nav_menu_list from '../nav-menu-list/nav-menu';
import './header.css';



const Header = () => {

    // const {i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
    const {t} = useTranslation()
  
    const [menu, setMenu] = useState()

    const DropDownMenu = () => {
        setMenu(!menu)
    }
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
                    <Link to="" className="theme-icon"></Link>
                    <Link to="/forms" className="login-button">
                        {/* Войти */}

                  
                        {t("login")}

                        <span className="user-icon"></span>
                    </Link>
                    <Link to="/user" className="login-button">
                        Личный кабинет
                        <span className="user-icon"></span>
                    </Link>
                </div>
            </div>
            {menu ? <Nav_menu_list /> : ''}
        </div>
    )
}

export default Header;