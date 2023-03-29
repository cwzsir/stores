import React from 'react';
import buyingBodyStyle from "../buying-body/Buying-body.module.css";
import whiteBasket from "../../../icon/whiteBasket.svg";
import favorites from "../../../icon/favoritesIcon.svg"
import cashBackIcon from "../../../icon/cashBackIcon.svg"
import dotGray from "../../../icon/dotGray.svg"
import dotOrange from "../../../icon/dotOrange.svg"
import buyingBodyConst from "../../../constants/buyingBodyConst";
import leftArrow from "../../../icon/leftArrow.svg"
import rightArrow from "../../../icon/rightArrow.svg"

const BuyingBodyPost = (props) => {
    return(
        <form className={buyingBodyStyle.buyingBodyPost}>
            <div className={buyingBodyStyle.buyingBodyPostProductInformation}>
                <div className={buyingBodyStyle.buyingBodyPostFavorites}>
                    <img src={favorites} alt=""/>
                </div>
                <div className={buyingBodyStyle.buyingBodyPostImageChange}>
                    <div className={buyingBodyStyle.buyingBodyPostImage}>
                        <img src={props.img} alt=""/>
                    </div>

                    <div className={buyingBodyStyle.buyingBodyPostDots} >
                        <img src={dotOrange} alt=""/>
                        <img src={dotGray} alt=""/>
                        <img src={dotGray} alt=""/>
                        <img src={dotGray} alt=""/>
                        <img src={dotGray} alt=""/>
                    </div>
                </div>

                <div className={buyingBodyStyle.buyingBodyPostDescription}>
                    <p>{props.productName}</p>
                    <div className={buyingBodyStyle.buyingBodyPostCashback}>
                        <img src={cashBackIcon} alt=""/>
                        <span>{props.cashBack}</span>
                    </div>

                    <div className={buyingBodyStyle.buyingBodyPostCharacteristic}>
                        <p>экран: {props.screen}</p>
                        <p>память: {props.memory}</p>
                        <p>фото: {props.photo}</p>
                        <p>аккумулятор: {props.battery}</p>
                    </div>

                    <div className={buyingBodyStyle.buyingBodyPostProductColor}>
                            <img src={props.colorBlue} alt="" className={buyingBodyStyle.buyingBodyPostColorChoice}/>
                            <img src={props.colorRubberDuckyYellow} alt="" className={buyingBodyStyle.buyingBodyPostColorNotChoice}/>
                            <img src={props.colorBeige} alt="" className={buyingBodyStyle.buyingBodyPostColorNotChoice}/>
                            <img src={props.colorWhite} alt="" className={buyingBodyStyle.buyingBodyPostColorNotChoice}/>
                    </div>
                </div>
            </div>

            <div >
                <div className={buyingBodyStyle.buyingBodyPostPrice}>
                    <p>{props.price}</p>
                    <span>{props.oldPrice}</span>
                    <span>{props.salePercent}</span>
                </div>

                <div className={buyingBodyStyle.buyingBodyPostRating}>
                    <img src={props.threeStar} alt=""/>
                    <span>{props.cashBack}</span>
                </div>

                <p className={buyingBodyStyle.buyingBodyPostProductInStock}>в наличии (<span>{props.inStock}</span>)</p>

                <div className={buyingBodyStyle.buyingBodyPostSeller}>
                    <span>Продавец:</span>
                    <span>{props.seller}</span>
                </div>


                <p className={buyingBodyStyle.buyingBodyPostFreeDelivery}>Бесплатная доставка</p>

                <button className={buyingBodyStyle.buyingBodyPostBasketButton}><img src={whiteBasket} alt=""/>В Корзину</button>
            </div>
        </form>
    );
}

const BuyingBody = () => {
    return (
      <div className={buyingBodyStyle.buyingBodyContainer}>
          {
              buyingBodyConst.map((item, index) =>
                <BuyingBodyPost key={index}
                                img={item.img}
                                productName={item.productName}
                                cashBack={item.cashBack}
                                screen={item.screen}
                                memory={item.memory}
                                photo={item.photo}
                                battery={item.battery}
                                colorBlue={item.colorBlue}
                                colorRubberDuckyYellow={item.colorRubberDuckyYellow}
                                colorBeige={item.colorBeige}
                                colorWhite={item.colorWhite}
                                price={item.price}
                                oldPrice={item.oldPrice}
                                salePercent={item.salePercent}
                                threeStar={item.threeStar}
                                inStock={item.inStock}
                                seller={item.seller}
                />
              )
          }
          <div className={buyingBodyStyle.buyingBodyChangePageButton}>
              <button><img src={leftArrow} alt=""/></button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>...</button>
              <button>20</button>
              <button><img src={rightArrow} alt=""/></button>
          </div>
      </div>
    );
};

export default BuyingBody;