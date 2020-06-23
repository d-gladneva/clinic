import React from 'react';

import why4 from '../../img/why4.jpg'

export default function WhyPrice() {

    return (
        <section className="why-price">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={why4} className="why-price_img" />
                            <div className="why-price_content">
                                <h2 className="section-title why-price_title">
                                    Всегда знайте цену<br /> приёма
                                </h2>
                                <p className="section-desc">
                                    Вам не нужно больше гадать сколько стоит приём у доктора. Вы всегда знаете
                                    конечную <br />стоимость до заказа услуги.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}