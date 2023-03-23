import React from "react";
import headerStyle from "./Header.module.css"
import headerSuggestionOne from "../../img/headerSuggestionOne.svg"
import headerSuggestionTwo from "../../img/headerSuggestionTwo.svg"
import logo from "../../img/Logo.svg"
import mapPin from "../../icon/mapPin.svg"
import search from "../../icon/search.svg"
import downArrow from "../../icon/downArrow.svg"
import account from "../../icon/account.svg"
import favorites from "../../icon/favorites.svg"
import basket from "../../icon/basket.svg"

const Header = () => {
    return (
        <header>
            <div className={headerStyle.suggestionWindow}>
                <img src={headerSuggestionOne} alt=""/>
                <p>Iphone 14 pro max</p>
                <img src={headerSuggestionTwo} alt=""/>
            </div>
            <nav className={headerStyle.navBar}>
                <div>
                    <a href="#">
                        <img src={logo} alt=""/>
                    </a>
                </div>
                <div className={headerStyle.headerLocation}>
                    <img src={mapPin} alt=""/>
                    <div>
                        <span>г.Бишкек</span> <br/>
                        <span className={headerStyle.grayColorText}>ул.Токтогула 187</span>
                    </div>
                </div>
                <div>
                    <a className={headerStyle.linkDecoration} href="#">
                        <button className={headerStyle.headerButton}>
                            <img src={search} alt=""/>
                            каталог
                        </button>
                    </a>
                </div>
                <form className={headerStyle.headerSearch}>
                    <input type="text" placeholder={"Смартфоны"}/>
                    <button type={"submit"}>Поиск</button>
                </form>
                <div className={headerStyle.changeLanguage}>
                    <span className={headerStyle.grayColorText}>РУ</span>
                    <button>
                        <img src={downArrow} alt=""/>
                    </button>
                </div>
                <div >
                    <a className={headerStyle.linkDecoration} href="#">
                        <button className={headerStyle.headerAccount}>

                                <img src={account} alt=""/>
                                <span className={headerStyle.grayColorText}>войти</span>
                        </button>
                    </a>
                </div>
                <div>
                    <a className={headerStyle.linkDecoration} href="#">
                        <button className={headerStyle.headerFavorites}>
                                <img src={favorites} alt=""/>
                                <span className={headerStyle.grayColorText}>избранное</span>
                        </button>
                    </a>
                </div>
                <div>
                    <a className={headerStyle.linkDecoration} href="#">
                        <button className={headerStyle.headerBasket}>
                                <img src={basket} alt=""/>
                                <span className={headerStyle.grayColorText}>корзина</span>
                        </button>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;


