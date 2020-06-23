import React from 'react';

import why4 from '../../img/why4.jpg'

export default function Save() {

    return (
        <section className="save">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={why4} className="save_img" />
                            <div className="save_content">
                                <h2 className="section-title save_title">
                                    Экономьте на офисе и рекламе
                                </h2>
                                <p className="section-desc">
                                    Clinic - хороший способ начать работать на самого себя! Консультируйте клиентов в
                                    любое удобное для вас время. Пройдите регистрацию в сервисе и вас увидят все наши
                                    пользователи.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}