import React from 'react';

import why from '../../img/why.jpg'

export default function Application() {

    return (
        <section className="application">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={why} className="application_img" />
                            <div className="application_content">
                                <h2 className="section-title application_title">
                                    Удобное приложение для общения с клиентами
                                </h2>
                                <p className="section-desc">
                                    Скачивайте приложение для вашего мобильного телефона, регистрируйтесь и начинайте
                                    принимать клиентов уже сегодня.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}