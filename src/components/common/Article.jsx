import React from 'react';
import sliderImg1 from "../../img/sliderImg1.png";

export const Article = () => {
    return (
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

    )
};