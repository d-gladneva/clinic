import React from "react";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12">
                        <a href="https://clinicapp.ru" target="_blank"><img src={require("../../img/cliniclogowhite.svg")}
                                                                            className="footer_logo" alt="Clinic"/></a>
                        <p className="footer_contact-str">
                            Пишите нам: <span>info@clinic.ru</span>
                        </p>
                        <p className="footer_contact-str footer_contact-str-two">
                            Звоните нам: <span>8 (900) 000-00-00</span>
                        </p>
                        <ul className="footer_contact-list clearfix">
                            <li className="footer_contact_item">
                                <a href="https://vk.com/clinicapp" target="_blank"
                                   className="footer_contact_box-content"><i className="fa fa-vk"
                                                                             aria-hidden="true"></i></a>
                            </li>
                            <li className="footer_contact_item">
                                <a href="#" className="footer_contact_box-content" target="_blank"><i
                                    className="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li className="footer_contact_item">
                                <a href="#" className="footer_contact_box-content" target="_blank"><i
                                    className="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                        <p className="footer_date">
                            &copy; 2019 Clinic ltd.
                        </p>
                    </div>
                    <div className="col-xl-2 col-lg-2 d-md-none d-lg-block col-sm-none col-none">
                        <ul className="footer_nav-list ml-0">
                            <li className="footer_nav-list_title">
                                <h3>Услуги</h3>
                            </li>
                            <li className="footer_nav-list_item revealator-slidedown revealator-once revealator-duration4">
                                <a href="#">Заказать услугу</a>
                            </li>
                            <li className="footer_nav-list_item revealator-slidedown revealator-once revealator-duration6">
                                <a href="all-clinic.html">Клиники</a>
                            </li>
                            <li className="footer_nav-list_item revealator-slidedown revealator-once revealator-duration8">
                                <a href="why.html">Почему Clinic?</a>
                            </li>
                            <li className="footer_nav-list_item revealator-slidedown revealator-once revealator-duration10">
                                <a href="price.html">Цены</a>
                            </li>
                            <li className="footer_nav-list_item revealator-slidedown revealator-once revealator-duration12">
                                <a href="city.html">Города</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-lg-3 d-md-none d-lg-block col-sm-none col-none">
                        <ul className="footer_nav-list footer_nav-list-clinic">
                            <li className="footer_nav-list_title">
                                <h3>Clinic</h3>
                            </li>
                            <li className="footer_nav-list_item revealator-slidedown revealator-once revealator-duration4">
                                <a href="#">О нас</a>
                            </li>
                            <li className="footer_nav-list_item revealator-slidedown revealator-once revealator-duration6">
                                <a href="#">Команда</a>
                            </li>
                            <li className="footer_nav-list_item revealator-slidedown revealator-once revealator-duration8">
                                <a href="#">Контакты</a>
                            </li>
                            <li className="footer_nav-list_item revealator-slidedown revealator-once revealator-duration10">
                                <a href="work.html">Как работает?</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-3 d-md-none d-lg-block col-sm-none col-none">
                        <ul className="footer_nav-list">
                            <li className="footer_nav-list_title">
                                <h3>Клиентам</h3>
                            </li>
                            <li className="footer_nav-list_item revealator-slidedown revealator-once revealator-duration4">
                                <a href="partnership.html">Партнёрство с Clinic</a>
                            </li>
                            <li className="footer_nav-list_item revealator-slidedown revealator-once revealator-duration6">
                                <a href="connect.html">Как подключиться к Clinic</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="footer_line"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                        <p className="footer_sponsor">
                            При поддержке:
                        </p>
                        <a href="https://jscorp.ru" target="_blank"><img src={require("../../img/jslogowhite.svg")}
                                                                         className="footer_js-logo"
                                                                         alt="JS corporation"/></a>
                    </div>

                    <div className="col-xl-7 col-lg-7 col-md-7 d-md-none d-lg-block col-sm-none col-none">
                        <a href="#" className="footer_policy">
                            Политика конфиденциальности | Условия использования
                        </a>
                        <p className="footer_policy-desc">
                            Информация, представленная на сайте, не может быть использована для <br/>постановки диагноза,
                            назначения лечения и не заменяет приём врача.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
