import React from 'react';

import price7 from '../../img/price7.jpg'

export default function More() {

    return (
        <section className="more">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={price7} className="section-img more_img" />
                            <div className="more_content">
                                <h2 className="section-title more_title">
                                    Больше услуг во время приема
                                </h2>
                                <p className="section-desc">
                                    При необходимости ветеринар может направить вас за дополнительным обследованием,
                                    сдать анализы или пройти узи для вашего питомца.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}