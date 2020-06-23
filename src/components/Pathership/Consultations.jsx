import React from 'react';

import partnership1 from '../../img/partnership1.jpg'

export default function Consultations() {

    return (
        <section className="consultations">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={partnership1} className="consultations_img" />
                            <div className="consultations_content">
                                <h2 className="section-title consultations_title">
                                    Проводите консультации в удобном для вас месте
                                </h2>
                                <p className="section-desc">
                                    Вам не обязательно быть на работе, чтобы проконсультировать вашего клиента.
                                    Проводите консультации там где вам удобно.
                                </p>
                                <form method="post" name="price" className="price_form">
                                    <input type="tel" name="price-tel" placeholder="+7(___) ___ __ __*"
                                           autoComplete="off" className="price_phone form-input phone-form" />
                                        <input type="submit" name="price-button" value="Заказать поддержку"
                                               className="button-submit button-price revealator-slideright revealator-once" />
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}