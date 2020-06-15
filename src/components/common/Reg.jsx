import React from "react";

export const Reg = () => {

    return (
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
    )
};
