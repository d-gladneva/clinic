import React from 'react';

import partnership2 from '../../img/partnership2.jpg'

export default function Cost() {

    return (
        <section className="cost">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={partnership2} className="cost_img" />
                            <div className="cost_content">
                                <h2 className="section-title cost_title">
                                    Оптимизируйте свои затраты на продвижение
                                </h2>
                                <p className="section-desc">
                                    Мы уверены, что каждый должен делать свою работу. Мы позаботимся о том, чтобы как
                                    можно больше наших пользователей узнали о вас, а вам всего лишь нужно лечить
                                    питомцев.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}