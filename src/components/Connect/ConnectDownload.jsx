import React from 'react';

import IphoneX from '../../img/IphoneX.png'

export default function ConnectDownload() {

    return (
        <section className="connect-download">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={IphoneX} className="connect-download_img" />
                            <div className="connect-download_content">
                                <h2 className="section-title connect-download_title">
                                    Скачайте приложение
                                </h2>
                                <p className="section-desc">
                                    Скачайте приложение Clinic в AppStore или PlayMarket и начните принимать
                                    консультации уже сегодня.
                                </p>
                                <ul className="main_button-list connect-download_store">
                                    <li className="store-button">
                                        <a href="#" target="_blank"
                                           className="store-button_box-content revealator-zoomin revealator-once">
                                            <p className="store-button_desc">
                                                Загрузите в
                                            </p>
                                            <h3 className="store-button_title">
                                                App Store
                                            </h3>
                                        </a>
                                    </li>

                                    <li className="store-button store-button-google revealator-zoomin revealator-once mr-0">
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