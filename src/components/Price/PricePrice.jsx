import React from 'react';

import price1 from '../../img/price1.jpg'

export default function PricePrice() {

    return (
        <section className="price-price">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={price1} className="section-img price-price_img" />
                            <div className="price-price_content">
                                <h2 className="section-title price-price_title">
                                    Вы всегда будете за ранее знать стоимость услуг
                                </h2>
                                <p className="section-desc">
                                    Вы всегда можете узнать стоимость казываемых услуг за ранее. Оплачивайте
                                    фиксированную стоимость без каких либо скрытых платежей и неожиданных счетов после
                                    приема.
                                </p>
                                <ul className="access_button-list">
                                    <li className="store-button">
                                        <a href="#" target="_blank" className="store-button_box-content">
                                            <p className="store-button_desc">
                                                Загрузите в
                                            </p>
                                            <h3 className="store-button_title">
                                                App Store
                                            </h3>
                                        </a>
                                    </li>

                                    <li className="store-button store-button-google revealator-slideright revealator-once mr-0">
                                        <a href="#" target="_blank" className="store-button_box-content">
                                            <p className="store-button_desc">
                                                Доступно в
                                            </p>
                                            <h3 className="store-button_title">
                                                Google Play
                                            </h3>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}