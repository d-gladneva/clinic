import React from 'react';

import price8 from '../../img/price8.jpg'

export default function Subscription() {

    return (
        <section className="subscription">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={price8} className="section-img subscription_img" />
                            <div className="subscription_content">
                                <h2 className="section-title subscription_title">
                                    Подписка на все виды услуг
                                </h2>
                                <p className="section-desc">
                                    Оформите годовую подписку или оплачивайте каждый месяц и пользуйтесь услугами <a
                                    href="https://clinicapp.ru" className="section-desc_link">Clinic</a> без каких либо
                                    ограничений.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}