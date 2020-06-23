import React from 'react';

import connect1 from '../../img/connect1.jpg'

export default function ConnectForm() {

    return (
        <section className="connect-form">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={connect1} className="connect-form_img" />
                            <div className="connect-form_content">
                                <h2 className="section-title connect-form_title">
                                    Заполните форму
                                </h2>
                                <p className="section-desc">
                                    Вам необходимо загрузить свой диплом и заполнить необходимую информацию, чтобы мы
                                    были уверены в том, что вы настоящий профессионал в своем деле
                                </p>
                                <a href="#" className="button-submit button-a connect-form_button">Заполнить форму</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
)
}