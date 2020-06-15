import React from 'react';

import '../css/main.css'
import '../css/media.css'
import '../css/all-clinic.css'
import '../css/all-clinic-media.css'
import '../css/city.css'
import '../css/city-media.css'
import '../css/connect.css'
import '../css/connect-media.css'
// import '../css/fonts.css'
import '../css/partnership.css'
import '../css/partnership-media.css'
import '../css/price.css'
import '../css/price-media.css'
import '../css/why.css'
import '../css/work-media.css'
import '../css/work.css'
import '../css/why-media.css'


import '../css/vendor/bootstrap.min.css'
// import '../css/vendor/chosen.css'
// import '../css/vendor/fm.revealator.jquery.min.css'
// import '../css/vendor/font-awesome.css'
// import '../css/vendor/jquery.arcticmodal-0.3.css'
// import '../css/vendor/owl.carousel.min.css'
// import '../css/vendor/pushy.css'
import '../css/vendor/slick.css'
// import '../css/vendor/slick-theme.css'


import cliniclogo1 from "../img/cliniclogo1.png"
import sliderImg1 from "../img/sliderImg1.png"
import main from "../img/main.svg"
import sliderImg2 from "../img/sliderImg2.png"
import IphoneX from "../img/IphoneX.png"
import sliderImg3 from "../img/sliderImg3.png"
import sliderImg4 from "../img/sliderImg4.png"
import hospital from "../img/hospital.svg"
import money from "../img/money.svg"
import Objects from "../img/Objects.svg"
import Group from "../img/Group.svg"
import cliniclogowhite from "../img/cliniclogowhite.svg"
import jslogowhite from "../img/jslogowhite.svg"



const Main = () => {

    return (
      <html lang="ru">
    <head>

        {/*Для всяких-всяких*/}

        {/**/}

        {/**/}




        {/*Стили*/}
        <link rel="stylesheet" type="text/css"
              href="../css/vendor/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css"
              href="../css/vendor/owl.carousel.min.css"/>
        <link rel="stylesheet" type="text/css"
              href="../css/vendor/fm.revealator.jquery.min.css"/>
        <link rel="stylesheet" type="text/css"
              href="../css/vendor/slick.css"/>
        <link rel="stylesheet" type="text/css"
              href="../css/vendor/slick-theme.css"/>
        <link rel="stylesheet" type="text/css"
              href="../css/vendor/pushy.css"/>
        <link rel="stylesheet" type="text/css"
              href="../css/vendor/chosen.css"/>
        <link rel="stylesheet" type="text/css"
              href="../css/fonts.css"/>
        <link rel="stylesheet" type="text/css"
              href="../css/main.css"/>
        <link rel="stylesheet"
              type="text/css" href="../css/media.css"/>
    </head>
    <body>
    {/*Бургер меню*/}
    <nav className="pushy pushy-left">
        <div className="pushy-content">
            <ul>
                {/*Submenu*/}
                <ul className="pushy-list">
                    <li className="pushy-title"><a href="#"><i className="fa fa-users" aria-hidden="true"></i>Для
                        пользователей</a></li>
                    <li className="pushy-link"><a href="#">Заказать улсугу</a></li>
                    <li className="pushy-link"><a href="all-clinic.html">Клиники</a></li>
                    <li className="pushy-link"><a href="why.html">Почему Clinic?</a></li>
                    <li className="pushy-link"><a href="work.html">Как работает Clinic?</a></li>
                    <li className="pushy-link"><a href="price.html">Цены</a></li>
                    <li className="pushy-link"><a href="city.html">Города</a></li>
                </ul>

                <ul className="pushy-list">
                    <li className="pushy-title"><a href="#"><i className="fa fa-medkit" aria-hidden="true"></i>Для
                        клиник</a></li>
                    <li className="pushy-link"><a href="#">О нас</a></li>
                    <li className="pushy-link"><a href="#">Команда</a></li>
                    <li className="pushy-link"><a href="#">Контакты</a></li>
                </ul>

                <ul className="pushy-list">
                    <li className="pushy-title"><a href="#"><i className="fa fa-user-md" aria-hidden="true"></i>Поддержка</a>
                    </li>
                    <li className="pushy-link"><a href="#">FAQ's</a></li>
                    <li className="pushy-link"><a href="#">Задать вопрос</a></li>
                </ul>

                <ul className="pushy-list">
                    <li className="pushy-title"><a href="#"><i className="fa fa-user-md" aria-hidden="true"></i>Клиентам</a>
                    </li>
                    <li className="pushy-link"><a href="partnership.html">Партнёрство с Clinic</a></li>
                    <li className="pushy-link"><a href="connect.html">Как подключиться к Clinic</a></li>
                </ul>
                <li className="pushy-reg"><a href="#"><i className="fa fa-heartbeat" aria-hidden="true"></i>Вход \
                    Регистрация </a></li>
            </ul>
        </div>
    </nav>
    {/*Серая зона*/}
    <div className="site-overlay"></div>
    {/*Конец бургер меню*/}

    {/*Первая секция*/}
    <header>
        {/*Меню*/}
        <section className="menu clearfix ">
            {/*Лого*/}
            <a href="https://clinicapp.ru" target="_blank" className="logo"><img
                className="revealator-slidedown revealator-once" src={cliniclogo1} alt="Clinic"/></a>
            {/*Навигация*/}
            <div className="nav-menu-box">
                <ul className="nav-menu clearfix revealator-slidedown revealator-once">
                    <li className="nav-menu_item"><a href="#"><i className="fa fa-users" aria-hidden="true"></i>Для
                        пользователей</a>
                        <ul className="sub-menu sub-menu-users">
                            <li><a href="#">Заказать улсугу</a></li>
                            <li><a href="all-clinic.html">Клиники</a></li>
                            <li><a href="why.html">Почему Clinic?</a></li>
                            <li><a href="work.html">Как работает Clinic?</a></li>
                            <li><a href="price.html">Цены</a></li>
                            <li><a href="city.html" className="b-n">Города</a></li>
                        </ul>
                    </li>
                    <li className="nav-menu_item"><a href="#"><i className="fa fa-medkit" aria-hidden="true"></i>Для
                        клиник</a>
                        <ul className="sub-menu sub-menu-clinic">
                            <li><a href="partnership.html">Партнёрство с Clinic</a></li>
                            <li><a href="connect.html">Как подключиться?</a></li>
                        </ul>
                    </li>
                    <li className="mr-0 nav-menu_item"><a href="#"><i className="fa fa-user-md"
                                                                      aria-hidden="true"></i>Поддержка</a>
                        <ul className="sub-menu sub-menu-support">
                            <li><a href="#">FAQ's</a></li>
                            <li><a href="#">Задать вопрос</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            {/*Регистрация*/}
            <div className="log-in-box revealator-slidedown revealator-once">
                <a href="#" className="log-in clearfix"><span>Вход \ Регистрация</span><i
                    className="fa fa-heartbeat" aria-hidden="true"></i></a>
            </div>
            {/*Бургер меню*/}
            <i className="menu_burger menu-btn fa fa-bars" aria-hidden="true"></i>
        </section>
        {/*Самая первая секция*/}
        <section className="main">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h1 className="main_title">Выберите ветеринарную клинику, <br/>которая больше всего вам
                            подходит:</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        {/*Форма*/}
                        <form className="main_form hover-anim" method="post" name="main_form" className="main_form">
                            <div className="select-box">
                                {/*Первый список*/}
                                <select className="main_form_list list-main1" data-placeholder="Ваш город"
                                        placeholder="Ваш город">
                                    <option className="youCity"></option>
                                    <option>Москва</option>
                                    <option>Курск</option>
                                    <option>Великий Новгород</option>
                                    <option>Уфа</option>
                                    <option>Санкт - Петербург</option>
                                    <option>Москва</option>
                                    <option>Курск</option>
                                    <option>Великий Новгород</option>
                                    <option>Уфа</option>
                                    <option>Санкт - Петербург</option>
                                    <option>Москва</option>
                                    <option>Курск</option>
                                    <option>Великий Новгород</option>
                                    <option>Уфа</option>
                                    <option>Санкт - Петербург</option>
                                </select>
                                {/*Второй список*/}
                                <select className="main_form_list list-main2" data-placeholder="Клиника"
                                        placeholder="Клиника">
                                    <option className="youClinic"></option>
                                    <option>1..</option>
                                    <option>2..</option>
                                    <option>3..</option>
                                    <option>4..</option>
                                    <option>5..</option>
                                </select>
                            </div>
                            {/*Кнопочка*/}
                            <input type="submit" name="main_form-submit"
                                   className="button-submit main-button revealator-zoomin revealator-once revealator"
                                   value="Записаться на приём"/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </header>
    {/*Вторая секция*/}
    <section className="comment">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2 className="section-title comment_title">
                        Главврачи о своих клиниках <br/>и сотрудничестве с нами
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <ul className="comment_list">
                        <li className="comment_list_item revealator-slideleft revealator-once">
                            <div className="list_item_title">
                                <div className="comment_list_item_title_img"></div>
                                <h3 className="name-people">
                                    Анастасия Разумовская
                                </h3>
                                <p className="position-people">
                                    Владелец ветклиники
                                </p>
                                <p className="name-clinic">
                                    "Кот и пёс"
                                </p>
                            </div>
                            <div className="list_item_content">
                                <p>
                                    Мы начали сотрудничество с Clinic более года назад. Наши четвероногие пациенты
                                    теперь получают помощь оперативнее...
                                </p>
                                <a href="#">Читать продолжение...</a>
                            </div>
                        </li>

                        <li className="comment_list_item">
                            <div className="list_item_title">
                                <div className="comment_list_item_title_img"></div>
                                <h3 className="name-people">
                                    Анастасия Разумовская
                                </h3>
                                <p className="position-people">
                                    Владелец ветклиники
                                </p>
                                <p className="name-clinic">
                                    "Кот и пёс"
                                </p>
                            </div>
                            <div className="list_item_content">
                                <p>
                                    Мы начали сотрудничество с Clinic более года назад. Наши четвероногие пациенты
                                    теперь получают помощь оперативнее...
                                </p>
                                <a href="#">Читать продолжение...</a>
                            </div>
                        </li>

                        <li className="comment_list_item revealator-slideright revealator-once d-n-992">
                            <div className="list_item_title">
                                <div className="comment_list_item_title_img"></div>
                                <h3 className="name-people">
                                    Анастасия Разумовская
                                </h3>
                                <p className="position-people">
                                    Владелец ветклиники
                                </p>
                                <p className="name-clinic">
                                    "Кот и пёс"
                                </p>
                            </div>
                            <div className="list_item_content">
                                <p>
                                    Мы начали сотрудничество с Clinic более года назад. Наши четвероногие пациенты
                                    теперь получают помощь оперативнее...
                                </p>
                                <a href="#">Читать продолжение...</a>
                            </div>
                        </li>
                    </ul>

                    <ul className="comment_list revealator-slidedown revealator-once">
                        <li className="comment_list_item">
                            <div className="list_item_title">
                                <div className="comment_list_item_title_img"></div>
                                <h3 className="name-people">
                                    Анастасия Разумовская
                                </h3>
                                <p className="position-people">
                                    Владелец ветклиники
                                </p>
                                <p className="name-clinic">
                                    "Кот и пёс"
                                </p>
                            </div>
                            <div className="list_item_content">
                                <p>
                                    Мы начали сотрудничество с Clinic более года назад. Наши четвероногие пациенты
                                    теперь получают помощь оперативнее...
                                </p>
                                <a href="#">Читать продолжение...</a>
                            </div>
                        </li>

                        <li className="comment_list_item d-n-w-545">
                            <div className="list_item_title">
                                <div className="comment_list_item_title_img"></div>
                                <h3 className="name-people">
                                    Анастасия Разумовская
                                </h3>
                                <p className="position-people">
                                    Владелец ветклиники
                                </p>
                                <p className="name-clinic">
                                    "Кот и пёс"
                                </p>
                            </div>
                            <div className="list_item_content">
                                <p>
                                    Мы начали сотрудничество с Clinic более года назад. Наши четвероногие пациенты
                                    теперь получают помощь оперативнее...
                                </p>
                                <a href="#">Читать продолжение...</a>
                            </div>
                        </li>

                        <li className="comment_list_item d-n-992">
                            <div className="list_item_title">
                                <div className="comment_list_item_title_img"></div>
                                <h3 className="name-people">
                                    Анастасия Разумовская
                                </h3>
                                <p className="position-people">
                                    Владелец ветклиники
                                </p>
                                <p className="name-clinic">
                                    "Кот и пёс"
                                </p>
                            </div>
                            <div className="list_item_content">
                                <p>
                                    Мы начали сотрудничество с Clinic более года назад. Наши четвероногие пациенты
                                    теперь получают помощь оперативнее...
                                </p>
                                <a href="#">Читать продолжение...</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <a href="#"
                       className="button-submit button-a comment_button revealator-slidedown revealator-zoomin revealator-once revealator">Посмотреть
                        все отзывы</a>
                </div>
            </div>
        </div>
    </section>
    {/*Третья секция*/}
    <section className="article">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2 className="section-title article_title revealator-slideup revealator-once">
                        Статьи и рекомендации по уходу <br/>за любимыми питомцами
                    </h2>
                </div>
            </div>
            <div className="rowowl">
                {/*    <div class="article_slider">*/}
                {/*        <div class="slider_arrow arrow-left revealator-slideleft revealator-once"></div>*/}
                {/*        <div class="article_slider_item clearfix">*/}
                {/*            <a href="#">*/}
                {/*                <img src="img/slider-img1.png" class="article_slider_item_img" alt="Slider Image">*/}
                {/*                <div class="article_slider_item_content">*/}
                {/*                    <h3 class="article_slider_item_title">*/}
                {/*                        Кормить ли кошек рыбой и молоком?*/}
                {/*                    </h3>*/}
                {/*                    <p class="article_slider_item_date">*/}
                {/*                        01.01.2019*/}
                {/*                    </p>*/}
                {/*                    <ul class="article_slider_item_star-list">*/}
                {/*                        <li class="star-list_item"><i class="fa fa-star" aria-hidden="true"></i></li>*/}
                {/*                        <li class="star-list_item"><i class="fa fa-star" aria-hidden="true"></i></li>*/}
                {/*                        <li class="star-list_item"><i class="fa fa-star" aria-hidden="true"></i></li>*/}
                {/*                        <li class="star-list_item"><i class="fa fa-star-half-o" aria-hidden="true"></i></li>*/}
                {/*                        <li class="star-list_item"><i class="fa fa-star-o" aria-hidden="true"></i></li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*        <div class="slider_arrow arrow-right revealator-slideright revealator-once"></div>*/}
                {/*    </div>*/}
                <div className="owl-carousel article_slider">
                    <div className="article_item">
                        <a href="#">
                            <img src={sliderImg1} className="article_slider_item_img" alt="Slider Image"/>
                            <div className="article_slider_item_content">
                                <h3 className="article_slider_item_title">
                                    Кормить ли кошек рыбой и молоком?
                                </h3>
                                <p className="article_slider_item_date">
                                    01.01.2019
                                </p>
                                <ul className="article_slider_item_star-list">
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star-half-o"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star-o"
                                                                      aria-hidden="true"></i></li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div className="article_item">
                        <a href="#">
                            <img src={sliderImg1} className="article_slider_item_img" alt="Slider Image"/>
                            <div className="article_slider_item_content">
                                <h3 className="article_slider_item_title">
                                    Кормить ли кошек рыбой и молоком?
                                </h3>
                                <p className="article_slider_item_date">
                                    01.01.2019
                                </p>
                                <ul className="article_slider_item_star-list">
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star-half-o"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star-o"
                                                                      aria-hidden="true"></i></li>
                                </ul>
                            </div>
                        </a>
                    </div>

                    <div className="article_item">
                        <a href="#">
                            <img src={sliderImg1} className="article_slider_item_img" alt="Slider Image"/>
                            <div className="article_slider_item_content">
                                <h3 className="article_slider_item_title">
                                    Кормить ли кошек рыбой и молоком?
                                </h3>
                                <p className="article_slider_item_date">
                                    01.01.2019
                                </p>
                                <ul className="article_slider_item_star-list">
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star-half-o"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star-o"
                                                                      aria-hidden="true"></i></li>
                                </ul>
                            </div>
                        </a>
                    </div>

                    <div className="article_item">
                        <a href="#">
                            <img src={sliderImg1} className="article_slider_item_img" alt="Slider Image"/>
                            <div className="article_slider_item_content">
                                <h3 className="article_slider_item_title">
                                    Кормить ли кошек рыбой и молоком?
                                </h3>
                                <p className="article_slider_item_date">
                                    01.01.2019
                                </p>
                                <ul className="article_slider_item_star-list">
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star-half-o"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star-o"
                                                                      aria-hidden="true"></i></li>
                                </ul>
                            </div>
                        </a>
                    </div>

                    <div className="article_item">
                        <a href="#">
                            <img src={sliderImg1} className="article_slider_item_img" alt="Slider Image"/>
                            <div className="article_slider_item_content">
                                <h3 className="article_slider_item_title">
                                    Кормить ли кошек рыбой и молоком?
                                </h3>
                                <p className="article_slider_item_date">
                                    01.01.2019
                                </p>
                                <ul className="article_slider_item_star-list">
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star-half-o"
                                                                      aria-hidden="true"></i></li>
                                    <li className="star-list_item"><i className="fa fa-star-o"
                                                                      aria-hidden="true"></i></li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <a href="#"
                       className="button-submit button-a article_button revealator-zoomin revealator-once revealator">Посмотреть
                        все статьи</a>
                </div>
            </div>
        </div>
    </section>
    {/*Четвёртая секция*/}
    <section className="price">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <img src={main} className="price_img"/>
                    <div className="price_content">
                        <h2 className="section-title price_title">
                            Всегда знайте стоимость посещения врача наперед
                        </h2>
                        <p className="section-desc price_desc">
                            Заказывая услугу всегда знайте сколько она будет стоить
                        </p>
                        <form method="post" name="price" className="price_form">
                            <input type="tel" name="price-tel" placeholder="+7(___) ___ __ __*"
                                   autoComplete="off" className="price_phone form-input phone-form"/>
                            <input type="submit" name="price-button" value="Заказать услугу"
                                   className="button-submit button-price revealator-slideright revealator-once"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Пятая секция*/}
    <section className="access">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <img src={IphoneX} className="access_img"/>
                    <div className="access_content">
                        <h2 className="section-title access_title">
                            Быстрый доступ к Clinic
                        </h2>
                        <p className="section-desc access_desc">
                            Быстрый доступ к любой клиники из любой точки мира. Всё что Вам нужно, это только
                            скачать приложение и зарегистрироваться
                        </p>
                        <ul className="access_button-list">
                            <li className="store-button">
                                <a href="#" target="_blank" className="store-button_box-content">
                                    <p className="store-button_desc">
                                        Загрузите в
                                    </p>
                                    <h3 className="store-button_title">
                                        App Store
                                    </h3>
                                </a>
                            </li>

                            <li className="store-button store-button-google revealator-slideright revealator-once mr-0">
                                <a href="#" target="_blank" className="store-button_box-content">
                                    <p className="store-button_desc">
                                        Доступно в
                                    </p>
                                    <h3 className="store-button_title">
                                        Google Play
                                    </h3>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Шестая секция*/}
    <section className="city">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2 className="section-title city_title revealator-slideup revealator-once">
                        Clinic в вашем городе
                    </h2>
                    <p className="section-desc city_desc revealator-slideup revealator-once">
                        Найти подходящую клинику в Вашем городе может быть непросто. С Clinic этот поиск будет
                        значительно проще
                    </p>
                </div>
            </div>
            <div className="rowOwl">
                <div className="city_slider_owl owl-carousel">
                    {/*<div class="slider_arrow arrow-left arrow-city revealator-slideleft revealator-once"></div>*/}
                    <div className="city_slider_item">
                        <a href="#" className="city_slider_item_content">
                            <img src={sliderImg2} className="city_slider_img" alt="Slider Image"/>
                            <h3 className="city_slider_title">
                                Москва
                            </h3>
                        </a>
                    </div>
                    <div className="city_slider_item">
                        <a href="#" className="city_slider_item_content">
                            <img src={sliderImg2} className="city_slider_img" alt="Slider Image"/>
                            <h3 className="city_slider_title">
                                Москва
                            </h3>
                        </a>
                    </div>
                    <div className="city_slider_item">
                        <a href="#" className="city_slider_item_content">
                            <img src={sliderImg2} className="city_slider_img" alt="Slider Image"/>
                            <h3 className="city_slider_title">
                                Москва
                            </h3>
                        </a>
                    </div>
                    <div className="city_slider_item">
                        <a href="#" className="city_slider_item_content">
                            <img src={sliderImg2} className="city_slider_img" alt="Slider Image"/>
                            <h3 className="city_slider_title">
                                Москва
                            </h3>
                        </a>
                    </div>
                    <div className="city_slider_item">
                        <a href="#" className="city_slider_item_content">
                            <img src={sliderImg2} className="city_slider_img" alt="Slider Image"/>
                            <h3 className="city_slider_title">
                                Москва
                            </h3>
                        </a>
                    </div>
                    <div className="city_slider_item">
                        <a href="#" className="city_slider_item_content">
                            <img src={sliderImg2} className="city_slider_img" alt="Slider Image"/>
                            <h3 className="city_slider_title">
                                Москва
                            </h3>
                        </a>
                    </div>
                    <div className="city_slider_item">
                        <a href="#" className="city_slider_item_content">
                            <img src={sliderImg2} className="city_slider_img" alt="Slider Image"/>
                            <h3 className="city_slider_title">
                                Москва
                            </h3>
                        </a>
                    </div>
                    {/*<div class="slider_arrow arrow-right arrow-city revealator-slideright revealator-once"></div>*/}
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <a href="#"
                       className="button-submit button-a city_button revealator-zoomin revealator-once revealator">Посмотреть
                        все города</a>
                </div>
            </div>
        </div>
    </section>
    {/*Седьмая секция*/}
    <section className="why">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2 className="section-title why_title revealator-slideup revealator-once">
                        Почему Cliniс?
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <ul className="why_list">
                        <li className="why_list_item">
                            <img src={hospital} className="why_list_img" alt="Peaope and dog"/>
                            <h3 className="why_list_title revealator-slidedown revealator-once">
                                Только проверенные клиники в вашем городе
                            </h3>
                            <p className="why_list_desc revealator-slidedown revealator-once">
                                Мы начали сотрудничество с Clinic более года назад. Наши четвероногие пациенты
                                теперь получают помощь оперативнее...
                            </p>
                        </li>
                        <li className="why_list_item why_list-one-title-line why-w-992">
                            <img src={money} className="why_list_img why_list_img-money" alt="Pig"/>
                            <h3 className="why_list_title revealator-slidedown revealator-once">
                                Лучшие цены
                            </h3>
                            <p className="why_list_desc revealator-slidedown revealator-once">
                                Мы начали сотрудничество с Clinic более года назад. Наши четвероногие пациенты
                                теперь получают помощь оперативнее...
                            </p>
                        </li>
                        <li className="why_list_item">
                            <img src={Objects} className="why_list_img" alt="Doctor"/>
                            <h3 className="why_list_title revealator-slidedown revealator-once">
                                Возможность получать консультации онлайн
                            </h3>
                            <p className="why_list_desc revealator-slidedown revealator-once">
                                Мы начали сотрудничество с Clinic более года назад. Наши четвероногие пациенты
                                теперь получают помощь оперативнее...
                            </p>
                        </li>
                        <li className="why_list_item why-w-992">
                            <img src={Group} className="why_list_img" alt="Doctor"/>
                            <h3 className="why_list_title revealator-slidedown revealator-once">
                                Запись к специалисту в несколько кликов
                            </h3>
                            <p className="why_list_desc revealator-slidedown revealator-once">
                                Мы начали сотрудничество с Clinic более года назад. Наши четвероногие пациенты
                                теперь получают помощь оперативнее...
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/*Восьмая секция*/}
    <section className="reg">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="reg_bg">
                        <h2 className="section-title reg_title revealator-slideup revealator-once">
                            Зарегистрируйтесь!
                        </h2>
                        <p className="section-desc reg_desc revealator-slideup revealator-once">
                            чтобы начать пользоваться всеми <br/>преимуществами Clinic
                        </p>
                        <form method="post" className="reg_form revealator-zoomin revealator-once">
                            <input type="text" name="name" placeholder="Имя*" className="form-input"/>
                            <input type="text" name="fam" placeholder="Фамилия*" className="form-input"/>
                            <input type="email" name="mail" placeholder="Email*" className="form-input"/>
                            <input type="tel" name="tel" placeholder="+7(___) ___ __ __*"
                                   autoComplete="off" className="form-input phone-form"/>
                            <input type="submit" name="submit"
                                   className="button-submit reg_button revealator-zoomin revealator-once revealator"
                                   value="Зарегистрироваться"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Последняя секция*/}
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12">
                    <a href="https://clinicapp.ru" target="_blank"><img src={cliniclogowhite}
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
                    <a href="https://jscorp.ru" target="_blank"><img src={jslogowhite}
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

    {/*Скрипты JavaScript*/}
    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/owl.carousel.min.js"></script>
    <script src="js/vendor/chosen.jquery.min.js"></script>
    <script src="js/vendor/fm.revealator.jquery.min.js"></script>
    <script src="js/vendor/slick.js"></script>
    <script src="js/vendor/pushy.js"></script>
    <script src="js/vendor/jquery.maskedinput.min.js"></script>
    <script src="js/main.js"></script>
    </body>
    </html>)
}

export default Main;