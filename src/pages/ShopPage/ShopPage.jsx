import React from "react";

import './ShopPage.css';

const ShopPage = () => {
    return (
        <div className="container">
            <p className="shop-title">Магазин</p>
            <div className="shop-card-wrap-top">
                <div className="shop-card">
                    <div className="card-img-first"></div>
                    <div className="card-header">Футболка Park.Go</div>
                    <div className="card-text">Футболка белая оверсайз с принтом 
92% хлопок, 8% лайкра</div>
                    <div className="card-price">2 499 PC</div>
                    <button className="buy-btn">Получить !</button>
                </div>
                <div className="shop-card">
                    <div className="card-img-second"></div>
                    <div className="card-header">Шоппер Park.Go</div>
                    <div className="card-text">Шоппер белый с принтом, 40х35 см
92% хлопок, 8% лайкра; до 10 кг</div>
                    <div className="card-price">999 PC</div>
                    <button className="buy-btn">Получить !</button>
                </div>
                <div className="shop-card">
                    <div className="card-img-third"></div>
                    <div className="card-header">Шоппер Park.Go</div>
                    <div className="card-text">Шоппер белый с лого, 40х35 см
92% хлопок, 8% лайкра; до 10 кг</div>
                    <div className="card-price">1 499 PC</div>
                    <button className="buy-btn">Получить !</button>
                </div>
           
                
            </div>
            <div className="shop-card-wrap-down">
                    <div className="shop-card">
                        <div className="card-img-fourth"></div>
                        <div className="card-header">Футболка Park.Go</div>
                        <div className="card-text">Шоппер белый с принтом, 40х35 см
    92% хлопок, 8% лайкра; до 10 кг</div>
                        <div className="card-price">1 499 PC</div>
                        <button className="buy-btn">Получить !</button>
                    </div>
                    <div className="shop-card">
                        <div className="card-img-fifth"></div>
                        <div className="card-header">Пины Park.Go</div>
                        <div className="card-text">Набор значков с принтом на булавке, 2х2 см
    2 штуки, металл</div>
                        <div className="card-price">399 PC</div>
                        <button className="buy-btn">Получить !</button>
                        </div>
                </div>
        </div>

    )
}

export default ShopPage;