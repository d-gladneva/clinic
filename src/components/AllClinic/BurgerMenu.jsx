import React from 'react';

export default function BurgerMenu() {

    return (
        <nav className="pushy pushy-left">
            <div className="pushy-content">
                <ul>
                    {/*Submenu*/}
                    <ul className="pushy-list">
                        <li className="pushy-title"><a href="#"><i className="fa fa-users" aria-hidden="true"></i>Для
                            пользователей</a></li>
                        <li className="pushy-link"><a href="#">Заказать улсугу</a></li>
                        <li className="pushy-link"><a href="all-clinic">Клиники</a></li>
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
    )
}