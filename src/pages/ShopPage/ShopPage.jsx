import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import './ShopPage.css';


const ShopPage = () => {
    const {t} = useTranslation();
    return (
        <div className="container">
            <p className="shop-title">{t("shop")}</p>
            <div className="shop-card-wrap-top">
                <div className="shop-card">
                    <div className="card-img-first"></div>
                    <div className="card-header">{t("tshirt")}</div>
                    <div className="card-text">{t("tshirtdscr")}</div>
                    <div className="card-price">2 499 PC</div>
                    <button className="buy-btn"><Link className='page-links' to="/contact">{t("get")} </Link></button>
                </div>
                <div className="shop-card">
                    <div className="card-img-second"></div>
                    <div className="card-header">{t("tote")}</div>
                    <div className="card-text">{t("totedscr")}</div>
                    <div className="card-price">999 PC</div>
                    <button className="buy-btn"><Link className='page-links' to="/contact">{t("get")} </Link></button>
                </div>
                <div className="shop-card">
                    <div className="card-img-third"></div>
                    <div className="card-header">{t("tote")}</div>
                    <div className="card-text">{t("totelogodscr")}</div>
                    <div className="card-price">1 499 PC</div>
                    <button className="buy-btn"><Link className='page-links' to="/contact">{t("get")} </Link></button>
                </div>
           
                
            </div>
            <div className="shop-card-wrap-down">
                    <div className="shop-card">
                        <div className="card-img-fourth"></div>
                        <div className="card-header">{t("tote")}</div>
                        <div className="card-text">{t("totedscr")}</div>
                        <div className="card-price">1 499 PC</div>
                        <button className="buy-btn"><Link className='page-links' to="/contact">{t("get")} </Link></button>
                    </div>
                    <div className="shop-card">
                        <div className="card-img-fifth"></div>
                        <div className="card-header">{t("pins")}</div>
                        <div className="card-text">{t("pinsdscr")}</div>
                        <div className="card-price">399 PC</div>
                        <button className="buy-btn"><Link className='page-links' to="/contact">{t("get")} </Link></button>
                        </div>
                </div>
        </div>

    )
}

export default ShopPage;