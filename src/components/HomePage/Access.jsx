import React from "react";

const Access = () => {

    return (
        <section className="access">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={require("../../img/IphoneX.png")} className="access_img" />
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

    )
};

export default Access;
