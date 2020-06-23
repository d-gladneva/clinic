import React from 'react';

import why from '../../img/why.jpg'

export default function Clinic() {

    return (
        <section className="clinic">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={why} className="clinic_img"/>
                        <div className="clinic_content">
                            <h2 className="section-title clinic_title">
                                Clinic
                            </h2>
                            <p className="section-desc">
                                Это лучшый выбор в сфере заказа медицинской услуги. Когда болеет ваш питомец, очень
                                важно попасть к грамотному специалисту, поэтому приложение <a
                                href="https://clinicapp.ru" className="section-desc_link">Clinic</a> Было
                                разработано для того, чтобы вам было легко и доступно посещать ветеринара когда вам
                                удобно.
                            </p>
                            <form method="post" name="price" className="price_form">
                                <input type="tel" name="price-tel" placeholder="+7(___) ___ __ __*"
                                       autoComplete="off" className="price_phone form-input phone-form" />
                                <input type="submit" name="price-button" value="Регистрация"
                                       className="button-submit button-price revealator-slideright revealator-once" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}