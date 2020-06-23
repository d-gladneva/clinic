import React from 'react';

const Header = () => {

  return (
    <header>
      <section className="menu clearfix">
        {/*Лого*/}
        <a href="https://clinicapp.ru" target="_blank" className="logo"><img
            className="revealator-slidedown revealator-once" src={require("../../img/cliniclogo1.png")} alt="Clinic"/></a>
        {/*Навигация*/}
        <div className="nav-menu-box">
          <ul className="nav-menu clearfix revealator-slidedown revealator-once">
            <li className="nav-menu_item"><a href="#"><i className="fa fa-users" aria-hidden="true"></i>Для
              пользователей</a>
              <ul className="sub-menu sub-menu-users">
                <li><a href="#">Заказать улсугу</a></li>
                <li><a href="all-clinic">Клиники</a></li>
                <li><a href="why">Почему Clinic?</a></li>
                <li><a href="work">Как работает Clinic?</a></li>
                <li><a href="price">Цены</a></li>
                <li><a href="city" className="b-n">Города</a></li>
              </ul>
            </li>
            <li className="nav-menu_item"><a href="#"><i className="fa fa-medkit" aria-hidden="true"></i>Для
              клиник</a>
              <ul className="sub-menu sub-menu-clinic">
                <li><a href="partnership">Партнёрство с Clinic</a></li>
                <li><a href="connect">Как подключиться?</a></li>
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
  )
};

export default Header;
