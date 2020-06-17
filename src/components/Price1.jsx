import React from "react";

const Price = () => {

    return (
        <section className="price">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={require("../img/main.svg")} className="price_img" />
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

    )
};

export default Price;
