import React from 'react';

import connect2 from '../../img/connect2.jpg'
import connect4 from '../../img/connect4.png'
import connect6 from '../../img/connect6.png'
import connect8 from '../../img/connect8.png'

export default function PaymentClearfix() {

    return (
        <section className="payment clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={connect2} className="payment_img" />
                            <div className="payment_content">
                                <h2 className="section-title payment_title">
                                    Оплата в приложении
                                </h2>
                                <p className="section-desc">
                                    После приема или консультации ваши клиенты оплачивают услуги в нашем приложении,
                                    поэтому вы сконцентрируйтесь на лечении, а мы позаботимся о том, чтобы вы получили
                                    свою оплату
                                </p>
                                <ul className="payment_list clea">
                                    <li className="payment_list_item">
                                        <img src={connect4} />
                                    </li>
                                    <li className="payment_list_item">
                                        <img src={connect6} />
                                    </li>
                                    <li className="payment_list_item">
                                        <img src={connect8} />
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}