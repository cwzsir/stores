import React from 'react';
import bodyFilterStyle from "./Body-filter.module.css"
import deliveryFastTime from "../../icon/deliveryFastTime.svg"
import darkDownArrow from "../../icon/darkDownArrow.svg"
import yellow from "../../icon/colorChoice/yellow.svg"
import rubberDuckyYellow from "../../icon/colorChoice/rubberDuckyYellow.svg"
import beige from "../../icon/colorChoice/beige.svg"
import white from "../../icon/colorChoice/white.svg"
import aoGreen from "../../icon/colorChoice/aoGreen.svg"
import gray from "../../icon/colorChoice/gray.svg"
import granite from "../../icon/colorChoice/granite.svg"
import artyClickPurple from "../../icon/colorChoice/artyClickPurple.svg"
import black from "../../icon/colorChoice/black.svg"
import artyClickBlue from "../../icon/colorChoice/artyClickBlue.svg"
import artyClickRed from "../../icon/colorChoice/artyClickRed.svg"
import chromeYellow from "../../icon/colorChoice/chromeYellow.svg"
import pink from "../../icon/colorChoice/pink.svg"
import chelseaGem from "../../icon/colorChoice/chelseaGem.svg"
import blue from "../../icon/colorChoice/blue.svg"
import fullStar from "../../icon/fullStar.svg"
import emptyStar from "../../icon/emptyStar.svg"

const BodyFilter = () => {
    return (
        <div className={bodyFilterStyle.filterBody}>
            <form>
                <dl>
                    <dt>Электроника</dt>
                        <dd>Смартфоны (<span>234</span>)</dd>
                </dl>
            </form>

            <form className={bodyFilterStyle.fromTo}>
                <p>Цена, С</p>
                <input type="text" placeholder={"от 10 000"}/>
                <input type="text" placeholder={"до 199 999"}/>
            </form>

            <form className={bodyFilterStyle.radioFilter}>
                <p>Срок доставки</p>
                <div>
                    <input type="radio" id={"deliveryTimeSuperFast"} name={"deliveryTime"} value={"deliveryTimeSuperFast"}/>
                    <label htmlFor={"deliverySuperFastTime"}><img src={deliveryFastTime} alt=""/>1-2 часа</label>
                </div>

                <div>
                    <input type="radio" id={"deliveryTimeToday"} name={"deliveryTime"} value={"deliveryTimeToday"}/>
                    <label htmlFor={"deliveryTimeToday"}>Сегодня</label>
                </div>

                <div>
                    <input type="radio" id={"deliveryTimeTodayAndTomorrow"} name={"deliveryTime"} value={"deliveryTimeTodayAndTomorrow"}/>
                    <label htmlFor={"deliveryTimeTodayAndTomorrow"}>Сегодня или завтра</label>
                </div>

                <div>
                    <input type="radio" id={"deliveryTimeToFiveDay"} name={"deliveryTime"} value={"deliveryTimeToFiveDay"}/>
                    <label htmlFor={"deliveryToFiveDay"}>До 5 дней</label>
                </div>

                <div>
                    <input type="radio" id={"deliveryTimeWhatever"} name={"deliveryTime"} value={"deliveryTimeWhatever"}/>
                    <label htmlFor={"deliveryTimeWhatever"}>Любой</label>
                </div>

                <div className={bodyFilterStyle.partPaying}>
                    <input type="checkbox" id={"canPartPay"} name={"deliveryTime"} value={"canPartPay"}/>
                    <label htmlFor={"canPartPay"}>Можно оплатить частями</label>
                </div>
            </form>

            <form className={bodyFilterStyle.checkboxFilter}>
                <p>Производитель</p>
                <div>
                    <input type="checkbox" id={"phoneBrandApple"} name={"phoneBrand"} value={"phoneBrandApple"}/>
                    <label htmlFor={"phoneBrandApple"}>Apple</label>
                </div>

                <div>
                    <input type="checkbox" id={"phoneBrandXiaomi"} name={"phoneBrand"} value={"phoneBrandXiaomi"}/>
                    <label htmlFor={"phoneBrandXiaomi"}>Xiaomi</label>
                </div>

                <div>
                    <input type="checkbox" id={"phoneBrandSamsung"} name={"phoneBrand"} value={"phoneBrandSamsung"}/>
                    <label htmlFor={"phoneBrandSamsung"}>Samsung</label>
                </div>

                <div>
                    <input type="checkbox" id={"phoneBrandRealmi"} name={"phoneBrand"} value={"phoneBrandRealmi"}/>
                    <label htmlFor={"phoneBrandRealmi"}>Realme</label>
                </div>
                <div>
                    <input type="checkbox" id={"phoneBrandHonor"} name={"phoneBrand"} value={"phoneBrandHonor"}/>
                    <label htmlFor={"phoneBrandHonor"}>HONOR</label>
                </div>

                <button>Показать все<img src={darkDownArrow} alt=""/></button>
            </form>

            <form className={bodyFilterStyle.checkboxFilter}>
                <p>Скидки и акции</p>
                <div>
                    <input type="checkbox" id={"discounts"} name={"discountsAndPromotions"} value={"discounts"}/>
                    <label htmlFor={"discounts"}>скидки</label>
                </div>

                <div>
                    <input type="checkbox" id={"promoCodes"} name={"discountsAndPromotions"} value={"promoCodes"}/>
                    <label htmlFor={"promoCodes"}>промокоды</label>
                </div>
                <div>
                    <input type="checkbox" id={"gifts"} name={"discountsAndPromotions"} value={"gifts"}/>
                    <label htmlFor={"gifts"}>подарки</label>
                </div>
                <div>
                    <input type="checkbox" id={"inTheKit"} name={"discountsAndPromotions"} value={"inTheKit"}/>
                    <label htmlFor={"inTheKit"}>есть комплект</label>
                </div>

                <button>Показать все<img src={darkDownArrow} alt=""/></button>
            </form>

            <form className={bodyFilterStyle.checkboxFilter}>
                <p>Состояние товара</p>
                <div>
                    <input type="checkbox" id={"productConditionNew"} name={"productCondition"} value={"new"}/>
                    <label htmlFor={"new"}>Новый</label>
                </div>

                <div>
                    <input type="checkbox" id={"productConditionResale"} name={"productCondition"} value={"resale"}/>
                    <label htmlFor={"resale"}>Ресейл</label>
                </div>
            </form>

            <form className={bodyFilterStyle.checkboxFilter}>
                <p>Внешний вид</p>
                <div>
                    <input type="checkbox" id={"appearanceLikeNew"} name={"appearance"} value={"likeNew"}/>
                    <label htmlFor={"appearanceLikeNew"}>Как новый</label>
                </div>

                <div>
                    <input type="checkbox" id={"appearanceGreat"} name={"appearance"} value={"great"}/>
                    <label htmlFor={"appearanceGreat"}>Отличный</label>
                </div>

                <div>
                    <input type="checkbox" id={"appearanceGood"} name={"appearance"} value={"good"}/>
                    <label htmlFor={"appearanceGood"}>Хороший</label>
                </div>
            </form>

            <form className={bodyFilterStyle.checkboxFilter}>
                <p>Линейка</p>
                <div>
                    <input type="checkbox" id={"lineGalaxyA"} name={"line"} value={"lineGalaxyA"}/>
                    <label htmlFor={"lineGalaxyA"}>Galaxy A</label>
                </div>

                <div>
                    <input type="checkbox" id={"lineGalaxyS"} name={"line"} value={"lineGalaxyS"}/>
                    <label htmlFor={"lineGalaxyS"}>Galaxy S</label>
                </div>

                <div>
                    <input type="checkbox" id={"linePoco"} name={"line"} value={"linePoco"}/>
                    <label htmlFor={"linePoco"}>POCO</label>
                </div>

                <div>
                    <input type="checkbox" id={"lineRedmi"} name={"line"} value={"lineRedmi"}/>
                    <label htmlFor={"lineRedmi"}>Redmi</label>
                </div>

                <button>Показать все<img src={darkDownArrow} alt=""/></button>
            </form>

            <form className={bodyFilterStyle.fromTo}>
                <p>Диагональ экрана (точно)</p>
                <input type="text" placeholder={"от 4,1"}/>
                <input type="text" placeholder={"до 12,9"}/>
            </form>

            <form className={bodyFilterStyle.radioFilter}>
                <p>Вид доставки</p>
                <div>
                    <input type="radio" id={"typeOfDeliveryByCourier"} name={"typeOfDelivery"} value={"typeOfDeliveryByCourier"}/>
                    <label htmlFor={"typeOfDeliveryByCourier"}>Курьером</label>
                </div>

                <div>
                    <input type="radio" id={"typeOfDeliverySelf"} name={"typeOfDelivery"} value={"typeOfDeliverySelf"}/>
                    <label htmlFor={"typeOfDeliverySelf"}>Самовывозом</label>
                </div>

                <div>
                    <input type="radio" id={"typeOfDeliveryTradingHalls"} name={"typeOfDelivery"} value={"typeOfDeliveryTradingHalls"}/>
                    <label htmlFor={"typeOfDeliveryTradingHalls"}>Торговые залы</label>
                </div>

                <div>
                    <input type="radio" id={"typeOfDeliveryWhatever"} name={"typeOfDelivery"} value={"typeOfDeliveryWhatever"}/>
                    <label htmlFor={"typeOfDeliveryWhatever"}>Любой</label>
                </div>
            </form>

            <form className={bodyFilterStyle.radioFilter}>
                <p>Рейтинг магазина</p>
                <div>
                    <input type="radio" id={"storesRatingThreeStars"} name={"storesRating"} value={"storesRatingThreeStars"}/>
                    <label htmlFor={"storesRatingThreeStars"}>От</label>
                    <img src={fullStar} alt=""/>
                    <img src={fullStar} alt=""/>
                    <img src={fullStar} alt=""/>
                    <img src={emptyStar} alt=""/>
                    <img src={emptyStar} alt=""/>
                </div>

                <div>
                    <input type="radio" id={"storesRatingFourStars"} name={"storesRating"} value={"storesRatingFourStars"}/>
                    <label htmlFor={"storesRatingFourStars"}>От</label>
                    <img src={fullStar} alt=""/>
                    <img src={fullStar} alt=""/>
                    <img src={fullStar} alt=""/>
                    <img src={fullStar} alt=""/>
                    <img src={emptyStar} alt=""/>
                </div>

                <div>
                    <input type="radio" id={"storesRatingDoesntMatter"} name={"storesRating"} value={"storesRatingDoesntMatter"}/>
                    <label htmlFor={"storesRatingDoesntMatter"}>Не важно</label>
                </div>
            </form>

            <form>
                <p>Цвет</p>
                <div className={bodyFilterStyle.colorChoice}>
                    <div>
                        <button><img src={yellow} alt=""/></button>
                        <button><img src={rubberDuckyYellow} alt=""/></button>
                        <button><img src={beige} alt=""/></button>
                        <button><img src={white} alt=""/></button>
                        <button><img src={aoGreen} alt=""/></button>
                    </div>
                    <div>
                        <button><img src={gray} alt=""/></button>
                        <button><img src={granite} alt=""/></button>
                        <button><img src={artyClickPurple} alt=""/></button>
                        <button><img src={black} alt=""/></button>
                        <button><img src={artyClickBlue} alt=""/></button>
                    </div>
                    <div>
                        <button><img src={artyClickRed} alt=""/></button>
                        <button><img src={chromeYellow} alt=""/></button>
                        <button><img src={pink} alt=""/></button>
                        <button><img src={chelseaGem} alt=""/></button>
                        <button><img src={blue} alt=""/></button>
                    </div>
                </div>
            </form>
        </div>
    );

};

export default BodyFilter;