import React from 'react';

import work2 from '../../img/work2.jpg'

export default function WideChoice() {

    return (
        <section class="wide-choice">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <img src={work2} class="wide-choice_img" />
                            <div class="wide-choice_content">
                                <h2 class="section-title wide-choice_title">
                                    Большой выбор специалистов для вашего питомца
                                </h2>
                                <p class="section-desc">
                                    Выберете клинику, которая позаботится о здоровье вашего питомца. Мы сотрудничаем только с самыми лучшими клиниками в вашем городе.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
</section>
    )
}