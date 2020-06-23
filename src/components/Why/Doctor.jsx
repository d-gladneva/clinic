import React from 'react';

import why3 from '../../img/why3.jpg'

export default function Doctor() {

    return (
        <section className="doctor">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={why3} className="doctor_img" />
                            <div className="doctor_content">
                                <h2 className="section-title doctor_title">
                                    Доктор уже знает о вас
                                </h2>
                                <p className="section-desc">
                                    Верифицируйте свой аккаунт в приложении и пройдите первичный опрос, чтобы доктор
                                    знал как помочь вашему питомцу ещё до вашего прихода.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}