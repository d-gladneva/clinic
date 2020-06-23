import React from "react";
import sliderImg2 from "../../img/sliderImg2.png";

const City = () => {

    return (
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
    )
};

export default City;
