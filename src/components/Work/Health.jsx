import React from 'react';

import work1 from '../../img/work1.jpg'

export default function Health() {

    return (
        <section className="health">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={work1} className="health_img" />
                            <div className="health_content">
                                <h2 className="section-title health_title">
                                    Здоровье вашего питомца в одном приложении
                                </h2>
                                <p className="section-desc">
                                    Качайте мобильное приложение <a href="https://clinicapp.ru"
                                                                    className="section-desc_link">Clinic</a> в AppStore
                                    или GooglePlay, проходите регистрацию и пользуйтесь всеми услугами для ваших
                                    питомцев!
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