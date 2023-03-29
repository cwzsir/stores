import React from 'react';
import bestSuggestionStyle from "./Best-suggestion.module.css"
import favoritesIcon from "../../../icon/favoritesIcon.svg"
import cashBackIcon from "../../../icon/cashBackIcon.svg"
import whiteBasket from "../../../icon/whiteBasket.svg"
import rightArrow from "../../../icon/rightArrowCarousel.svg"
import bestSuggestionConst from "../../../constants/bestSuggestionConst";

const BestSuggestionPost = (props) => {
    return(
        <form className={bestSuggestionStyle.bestSuggestionPost}>
            <div className={bestSuggestionStyle.bestSuggestionPostHead}>
                <img src={favoritesIcon} className={bestSuggestionStyle.PostHeadFavorites} alt=""/>
                <img src={props.img} alt=""/>
                <div>
                    <img src={cashBackIcon} alt=""/>
                    <span>{props.cashBack}</span>
                </div>
            </div>

            <div className={bestSuggestionStyle.bestSuggestionPostDescription}>
                <div className={bestSuggestionStyle.postDescriptionPrice}>
                    <p>{props.price}</p>
                    <span>{props.oldPrice}</span>
                    <span>{props.salePercent}</span>
                </div>

                <p className={bestSuggestionStyle.postProductName}>{props.name}</p>

                <span className={bestSuggestionStyle.postProductCharacteristic}>{props.characteristic}</span>

                <div className={bestSuggestionStyle.postProductRating}>
                    <img src={props.threeStar} alt=""/>
                    <span>{props.reviews}</span>
                </div>

                <span className={bestSuggestionStyle.postProductInStock}>в наличии (<span>{props.inStock}</span>)</span>
            </div>

            <button className={bestSuggestionStyle.postBasketButton}><img src={whiteBasket} alt=""/>В Корзину</button>
        </form>
    );
};

const BestSuggestion = () => {
    return(
        <div className={bestSuggestionStyle.bestSuggestionContainer}>
            <div className={bestSuggestionStyle.bestSuggestionContainerTitle}>
                <span>Лучшие предложения</span>
                <button>Посмотреть все товары</button>
            </div>
            <div className={bestSuggestionStyle.bestSuggestionContainerSlide}>
                {
                    bestSuggestionConst.map((item, index) =>
                        <BestSuggestionPost key={index}
                                            img={item.img}
                                            cashBack={item.cashBack}
                                            price={item.price}
                                            oldPrice={item.oldPrice}
                                            salePercent={item.salePercent}
                                            name={item.name}
                                            characteristic={item.characteristic}
                                            threeStar={item.threeStar}
                                            reviews={item.reviews}
                                            inStock={item.inStock}
                        />
                    )
                }
            </div>
            <button className={bestSuggestionStyle.carouselButton}><img src={rightArrow} alt=""/></button>
        </div>
    );
};

export default BestSuggestion;