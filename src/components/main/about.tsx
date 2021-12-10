import { Fragment } from 'react';

function About(): JSX.Element {
    return (
        <section className="about container">
            <section className="about-controls">
                <button className="btn-about-control btn-about-control--active">Характеристики</button>
                <button className="btn-about-control">Отзывы</button>
                <button className="btn-about-control">Контакты</button>
            </section>
            <section className="about-tabs">
                <section className="about-tabs__tab about-tabs__tab-info visually-hidden">
                    <ul className="about-tabs-list">
                        <li className="about-tabs-list__item">
                            <span className="about-tabs-list__item-props">Трансмиссия</span>
                            <span className="about-tabs-list__item-value">Роботизированная</span>
                        </li>
                        <li className="about-tabs-list__item">
                            <span className="about-tabs-list__item-props">Мощность двигателя, л.с.</span>
                            <span className="about-tabs-list__item-value">249</span>
                        </li>
                        <li className="about-tabs-list__item">
                            <span className="about-tabs-list__item-props">Тип двигателя</span>
                            <span className="about-tabs-list__item-value">Бензиновый</span>
                        </li>
                        <li className="about-tabs-list__item">
                            <span className="about-tabs-list__item-props">Привод</span>
                            <span className="about-tabs-list__item-value">Полный</span>
                        </li>
                        <li className="about-tabs-list__item">
                            <span className="about-tabs-list__item-props">Объем двигателя, л</span>
                            <span className="about-tabs-list__item-value">2.4</span>
                        </li>
                        <li className="about-tabs-list__item">
                            <span className="about-tabs-list__item-props">Макс. крутящий момент</span>
                            <span className="about-tabs-list__item-value">370/4500</span>
                        </li>
                        <li className="about-tabs-list__item">
                            <span className="about-tabs-list__item-props">Количество цилиндров</span>
                            <span className="about-tabs-list__item-value">4</span>
                        </li>
                    </ul>
                </section>
                <section className="about-tabs__tab about-tabs__tab-review">
                    <button className="btn btn--reverse-color review__btn">Оставить отзыв</button>
                    <section className="review">
                        <h2 className="review__user-name">Борис Иванов</h2>
                        <section className="reviews-lists-wrapper">
                            <section>
                                <div className="review__pros">
                                    <span>+</span>
                                    <span className="pros">Достоинства</span>
                                </div>
                                <ul className="review__user-list review-pros-list">
                                    <li>мощность, внешний вид</li>
                                </ul>
                            </section>
                            <section>
                                <div className="review__cons">
                                    <span>-</span>
                                    <span className="cons">Недостатки</span>
                                </div>
                                <ul className="review__user-list sreview-cons-list">
                                    <li>Слабые тормозные колодки (пришлось заменить)</li>
                                </ul>
                            </section>
                        </section>

                        <section className="review-comment comment">
                            <span>Комментарий</span>
                            <p className="comment__text">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</p>
                        </section>

                        <section className="review-raiting raiting">
                            <div className="raiting__stars">
                                {['5', '4', '3', '2', '1'].map((ratingItem) => (
                                    <Fragment key={ratingItem}>
                                        <input className="rating-input visually-hidden" name="rating" value={ratingItem} id={`${ratingItem}-stars`} type="radio" />
                                        <label htmlFor={`${ratingItem}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                                            <svg className="rating__star-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fill-opacity="0.7" />
                                            </svg>
                                        </label>
                                    </Fragment>))}
                            </div>
                            <div className="review__advise">
                                <span>Советует</span>
                            </div>
                        </section>

                        <section className="review__time-wrapper">
                            <time className="review__time">1 минуту назад</time>
                            <button className="review__answer-btn">Ответить</button>
                        </section>


                    </section>
                    <section className="review">
                        <h2 className="review__user-name">Марсель Исмагилов</h2>
                        <section className="reviews-lists-wrapper">
                            <section>
                                <div className="review__pros">
                                    <span>+</span>
                                    <span className="pros">Достоинства</span>
                                </div>
                                <ul className="review__user-list review-pros-list">
                                    <li>Cтиль, комфорт, управляемость</li>
                                </ul>
                            </section>
                            <section>
                                <div className="review__cons">
                                    <span>-</span>
                                    <span className="cons">Недостатки</span>
                                </div>
                                <ul className="review__user-list sreview-cons-list">
                                    <li> Дорогой ремонт и обслуживание</li>
                                </ul>
                            </section>
                        </section>

                        <section className="review-comment comment">
                            <span>Комментарий</span>
                            <p className="comment__text">Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.</p>
                        </section>

                        <section className="review-raiting raiting">
                            <div className="raiting__stars">
                                {['5', '4', '3', '2', '1'].map((ratingItem) => (
                                    <Fragment key={ratingItem}>
                                        <input className="rating-input visually-hidden" name="rating" value={ratingItem} id={`${ratingItem}-stars`} type="radio" />
                                        <label htmlFor={`${ratingItem}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                                            <svg className="rating__star-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fill-opacity="0.7" />
                                            </svg>
                                        </label>
                                    </Fragment>))}
                            </div>
                            <div className="review__advise">
                                <span>Советует</span>
                            </div>
                        </section>

                        <section className="review__time-wrapper">
                            <time className="review__time">1 минуту назад</time>
                            <button className="review__answer-btn">Ответить</button>
                        </section>

                    </section>
                </section>
                <section className="about-tabs__tab about-tabs__tab-contacts">

                </section>
            </section>
        </section>
    )
}

export default About;