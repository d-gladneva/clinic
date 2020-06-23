import React from 'react';

import why2 from '../../img/why2.jpg'

export default function Turn() {

    return (
        <section className="turn">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={why2} className="turn_img" />
                            <div className="turn_content">
                                <h2 className="section-title turn_title">
                                    Не нужно стоять в очереди
                                </h2>
                                <p className="section-desc">
                                    Сколько времени вы проводили в ожидании приёма ветеринара? С <a
                                    href="https://clinicapp.ru" className="section-desc_link">Clinic</a> вам больше не
                                    придётся ждать ни минуты. Заказывайте услугу через наше приложение и приходите на
                                    приём в назначенное время.
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