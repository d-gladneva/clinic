import React from 'react';

import work3 from '../../img/work3.jpg'

export default function Consultation() {

    return (
        <section className="consultation">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={work3} className="consultation_img" />
                            <div className="consultation_content">
                                <h2 className="section-title consultation_title">
                                    Онлайн консультация в удобное для вас время
                                </h2>
                                <p className="section-desc">
                                    Не обязательно ехать к доктору, чтобы получить первичную консультацию. Выберите
                                    подходящего для вас врача, дату и время приёма, и общайтесь с доктором в мобильном
                                    приложении <a href="https://clinicapp.ru" className="section-desc_link">Clinic</a>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}