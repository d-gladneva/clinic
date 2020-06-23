import React from 'react';

import all1 from '../../img/all1.png'
import all2 from '../../img/all2.png'
import all3 from '../../img/all3.png'
import all4 from '../../img/all4.png'
import all5 from '../../img/all5.png'
import all6 from '../../img/all6.png'

export default function Advantage() {

    return (
        <section className="advantage">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section-title">
                            Преимущества
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="advantage_list clearfix revealator-zoomin revealator-once ">
                            <li className="advantage_item clearfix">
                                <img src={all1} className="advantage_item_image" />
                                    <h3 className="advantage_item_title">
                                        Онлайн консультация
                                    </h3>
                                    <p className="advantage_item_desc">
                                        Прокунсультируйтесь у врача по любому вопросу. Просто закажите звонок и с вами
                                        свяжутся.
                                    </p>
                            </li>
                            <li className="advantage_item clearfix">
                                <img src={all2} className="advantage_item_image" />
                                    <h3 className="advantage_item_title">
                                        Вызов врача
                                    </h3>
                                    <p className="advantage_item_desc">
                                        Только лучшее решение для ваших питомцев. Экономьте время и закажите выезд врача
                                        на дом.
                                    </p>
                            </li>
                            <li className="advantage_item advantage_item-w768 clearfix">
                                <img src={all3} className="advantage_item_image" />
                                    <h3 className="advantage_item_title">
                                        Запись к врачу
                                    </h3>
                                    <p className="advantage_item_desc">
                                        Выберите для себя одну из клиник, запишитесь на приём и сразу оплатите её.
                                    </p>
                            </li>
                        </ul>

                        <ul className="advantage_list advantage_list-w768 clearfix mt-0 revealator-zoomin revealator-once">
                            <li className="advantage_item">
                                <img src={all4} className="advantage_item_image" />
                                    <h3 className="advantage_item_title">
                                        Онлайн консультация
                                    </h3>
                                    <p className="advantage_item_desc">
                                        Прокунсультируйтесь у врача по любому вопросу. Просто закажите звонок и с вами
                                        свяжутся.
                                    </p>
                            </li>
                            <li className="advantage_item">
                                <img src={all5} className="advantage_item_image" />
                                    <h3 className="advantage_item_title">
                                        Вызов врача
                                    </h3>
                                    <p className="advantage_item_desc">
                                        Только лучшее решение для ваших питомцев. Экономьте время и закажите выезд врача
                                        на дом.
                                    </p>
                            </li>
                            <li className="advantage_item advantage_item-w768">
                                <img src={all6} className="advantage_item_image" />
                                    <h3 className="advantage_item_title">
                                        Запись к врачу
                                    </h3>
                                    <p className="advantage_item_desc">
                                        Выберите для себя одну из клиник, запишитесь на приём и сразу оплатите её.
                                    </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
)
}