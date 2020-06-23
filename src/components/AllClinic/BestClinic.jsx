import React from 'react';

import all7 from '../../img/all7.jpg'
import all8 from '../../img/all8.jpg'
import all9 from '../../img/all9.jpg'
import all10 from '../../img/all10.jpg'
import all11 from '../../img/all11.jpg'

export default function  BestClinic() {

    return (
        <section className="best-clinic">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section-title revealator-slideup revealator-once">
                            Лучшие клиники
                        </h2>
                        <p className="section-desc best-clinic_desc revealator-slideup revealator-once">
                            В данном разделе представлены лучшие клиники по мнению <br />наших пользователей, клиники
                            которым доверяют:
                        </p>
                    </div>
                </div>
                <div className="rowOwl">
                    <div className="best-clinic_list owl-carousel">
                        <div className="best-clinic_list_item">
                            <a href="#" className="best-clinic_list_item_box">
                                <div className="best-clinic_list_item_img">
                                    <img src={all7} />
                                </div>
                                <h3 className="best-clinic_list_title">
                                    "Котопёс"
                                </h3>
                            </a>
                        </div>

                        <div className="best-clinic_list_item">
                            <a href="#" className="best-clinic_list_item_box">
                                <div className="best-clinic_list_item_img">
                                    <img src={all8} />
                                </div>
                                <h3 className="best-clinic_list_title">
                                    "Доктор Барсик"
                                </h3>
                            </a>
                        </div>

                        <div className="best-clinic_list_item">
                            <a href="#" className="best-clinic_list_item_box">
                                <div className="best-clinic_list_item_img">
                                    <img src={all9} />
                                </div>
                                <h3 className="best-clinic_list_title">
                                    "Зрячий крот"
                                </h3>
                            </a>
                        </div>

                        <div className="best-clinic_list_item">
                            <a href="#" className="best-clinic_list_item_box">
                                <div className="best-clinic_list_item_img">
                                    <img src={all10} />
                                </div>
                                <h3 className="best-clinic_list_title">
                                    "Здоровая ферма"
                                </h3>
                            </a>
                        </div>

                        <div className="best-clinic_list_item">
                            <a href="#" className="best-clinic_list_item_box">
                                <div className="best-clinic_list_item_img">
                                    <img src={all11} />
                                </div>
                                <h3 className="best-clinic_list_title">
                                    "Не болит"
                                </h3>
                            </a>
                        </div>
                        <div className="best-clinic_list_item">
                            <a href="#" className="best-clinic_list_item_box">
                                <div className="best-clinic_list_item_img">
                                    <img src={all11} />
                                </div>
                                <h3 className="best-clinic_list_title">
                                    "Не болит"
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <a href="#"
                           className="button-submit button-a best-clinic_button revealator-slidedown revealator-once">
                            Посмотреть все клиники
                        </a>
                    </div>
                </div>
            </div>
        </section>
)
}