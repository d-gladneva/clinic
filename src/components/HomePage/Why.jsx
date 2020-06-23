import React from "react";

const Why = () => {

    return (
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
                                <img src={require("../../img/hospital.svg")} className="why_list_img" alt="Peaope and dog"/>
                                <h3 className="why_list_title revealator-slidedown revealator-once">
                                    Только проверенные клиники в вашем городе
                                </h3>
                                <p className="why_list_desc revealator-slidedown revealator-once">
                                    Мы начали сотрудничество с Clinic более года назад. Наши четвероногие пациенты
                                    теперь получают помощь оперативнее...
                                </p>
                            </li>
                            <li className="why_list_item why_list-one-title-line why-w-992">
                                <img src={require("../../img/money.svg")} className="why_list_img why_list_img-money" alt="Pig"/>
                                <h3 className="why_list_title revealator-slidedown revealator-once">
                                    Лучшие цены
                                </h3>
                                <p className="why_list_desc revealator-slidedown revealator-once">
                                    Мы начали сотрудничество с Clinic более года назад. Наши четвероногие пациенты
                                    теперь получают помощь оперативнее...
                                </p>
                            </li>
                            <li className="why_list_item">
                                <img src={require("../../img/Objects.svg")} className="why_list_img" alt="Doctor"/>
                                <h3 className="why_list_title revealator-slidedown revealator-once">
                                    Возможность получать консультации онлайн
                                </h3>
                                <p className="why_list_desc revealator-slidedown revealator-once">
                                    Мы начали сотрудничество с Clinic более года назад. Наши четвероногие пациенты
                                    теперь получают помощь оперативнее...
                                </p>
                            </li>
                            <li className="why_list_item why-w-992">
                                <img src={require("../../img/Group.svg")} className="why_list_img" alt="Doctor"/>
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
    )
};

export default Why;
