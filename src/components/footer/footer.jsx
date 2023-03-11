import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './style.css'

const Footer = () => {
  const {t} = useTranslation();
    return (
        <div className="footer-items">
          <div className="social-icons-links">
              <a className='social-links instagram-icon' href="/"></a>
              <a className='social-links facebook-icon' href="/"></a>
              <a className='social-links whatsapp-icon' href="/"></a>
              <a className='social-links telegram-icon' href="/"></a>
              <a className='social-links youtube-icon' href="/"></a>
              <a className='social-links email-icon' href="/"></a>
            </div>
          <div className="page-navigations">
              <Link className='page-links' to="/about">{t("about")}</Link>
              <Link className='page-links' to="/news">{t("news")}</Link>
              <Link className='page-links' to="/contact">{t("contact")}</Link>
            </div>
          <a href="/" className="head-icon-for-footer"></a>
          <span className="footer-description">
            {t("organization")}
          </span>
          <div className="certificate-up-to">©2023</div>
        </div>
    );
};
export default Footer;