import React from 'react';

import all13 from '../../img/all13.jpg'

export default function Check() {

    return (
        <section className="check">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={all13} className="check_img" />
                            <div className="check_content">
                                <h2 className="section-title check_title">
                                    Проверяем каждую клинику
                                </h2>
                                <p className="section-desc">
                                    Будьте уверены, что каждая клиника соответствует всем нормам и имеет
                                    профессиональный персонал, чтобы вылечить вашего питомца. Мы тщательно проверяем
                                    каждую клинику прежде, чем добавить её.
                                </p>
                                <a href="#" className="button-submit button-a check_button">Узнать подробнее</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}