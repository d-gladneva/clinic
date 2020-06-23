import React from 'react';

import all12 from '../../img/all12.jpg'

export default function BestService() {

    return (
        <section className="best-service">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={all12} className="best-service_img" />
                            <div className="best-service_content">
                                <h2 className="section-title best-service_title">
                                    Получайте лучшый сервис
                                </h2>
                                <p className="section-desc">
                                    Мы тщательно следим, чтобы каждая клиника представляла лучшый сервис для наших
                                    пользователей. Заказывайте услуги через <a href="https://clinicapp.ru"
                                                                               className="section-desc_link">Clinic</a> и
                                    будьте уверены, что выбирайте лучшую компанию для здоровья ваших питомцев.
                                </p>
                                <a href="#" className="button-submit button-a best-service_button">Регистрация</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}