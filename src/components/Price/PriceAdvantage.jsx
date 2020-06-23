import React from 'react';

import price2 from '../../img/price2.jpg'
import price3 from '../../img/price3.jpg'
import price4 from '../../img/price4.jpg'
import price5 from '../../img/price5.jpg'
import price6 from '../../img/price6.jpg'

export default function PriceAdvantage() {

    return (
        <section className="price-advantage">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section-title price-advantage_title">
                            Что получаете при каждом обращении?
                        </h2>
                        <p className="section-desc price-advantage_desc">
                            <a href="https://clinicapp.ru" className="section-desc_link">Clinic</a> гарантирует качество
                            предоставляемых услуг.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <ul className="price-advantage_list">
                            <li className="price-advantage_item">
                                <img src={price2} className="price-advantage_item_img" />
                                    <h3 className="price-advantage_item_title">
                                        Приемущество
                                    </h3>
                            </li>

                            <li className="price-advantage_item">
                                <img src={price3} className="price-advantage_item_img" />
                                    <h3 className="price-advantage_item_title">
                                        Приемущество
                                    </h3>
                            </li>

                            <li className="price-advantage_item">
                                <img src={price4} className="price-advantage_item_img" />
                                    <h3 className="price-advantage_item_title">
                                        Преимущество
                                    </h3>
                            </li>

                            <li className="price-advantage_item">
                                <img src={price5} className="price-advantage_item_img" />
                                    <h3 className="price-advantage_item_title">
                                        Преимущество
                                    </h3>
                            </li>

                            <li className="price-advantage_item">
                                <img src={price6} className="price-advantage_item_img" />
                                    <h3 className="price-advantage_item_title">
                                        Преимущество
                                    </h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
)
}