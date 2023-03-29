import React from 'react';
import footerStyle from "./Footer.module.css"
import appStore from "../../icon/appStoreButton.svg";
import googlePlay from "../../icon/googlePlayButton.svg";
import facebookIcon from "../../icon/facebookIcon.svg"
import instagramIcon from "../../icon/instagramIcon.svg"
import youtubeIcon from "../../icon/youtubeIcon.svg"
import mastercardIcon from "../../icon/mastercardIcon.svg"

const Footer = () => {
  return(
      <div className={footerStyle.footerBody}>
          <div>
              <div className={footerStyle.footerInformation}>
                  <div>
                      <p>Маркетплейс</p>
                      <ul>
                          <li><a href="">О компании</a></li>
                          <li><a href="">Контакты</a></li>
                          <li><a href="">Вакансии</a></li>
                          <li><a href="">Реквизиты</a></li>
                          <li><a href="">Партнерская программа</a></li>
                          <li><a href="">Настоящий маркетплейс</a></li>
                      </ul>
                  </div>

                  <div>
                      <p>Покупателю</p>
                      <ul>
                          <li><a href="">Помощь покупателю</a></li>
                          <li><a href="">Доставка</a></li>
                          <li><a href="">Примерка</a></li>
                          <li><a href="">Оплата</a></li>
                          <li><a href="">Возврат</a></li>
                          <li><a href="">Рассрочка</a></li>
                          <li><a href="">Акции</a></li>
                      </ul>
                  </div>

                  <div>
                      <p>Магазинам</p>
                      <ul>
                          <li><a href="">Помощь магазинам</a></li>
                          <li><a href="">Приглашение к сотрудничеству</a></li>
                          <li><a href="">Вход в личный кабинет</a></li>
                      </ul>
                  </div>

                  <div>
                      <p>Правовая информация</p>
                      <ul>
                          <li><a href="">Условия использования сайта</a></li>
                          <li><a href="">Политика обработки персональных данных</a></li>
                          <li><a href="">Условия заказа и доставки</a></li>
                      </ul>
                  </div>

                  <div>
                      <p>Мобильное приложение</p>
                          <div className={footerStyle.footerMobileApp}>
                              <a href="#"><img src={appStore} alt=""/></a>
                              <a href="#"><img src={googlePlay} alt=""/></a>
                          </div>
                  </div>
              </div>

              <div className={footerStyle.footerMoreInfo}>
                  <div>
                      <p>© 2020 - 20∞ Stores.kg Все права защищены.</p>
                  </div>
                  
                  <div>
                      <span>Мы принимаем:</span>
                      <img src={mastercardIcon} alt=""/>
                  </div>
                  
                  <div>
                      <span>Мы в соцсетях:</span>
                      <a href=""><img src={facebookIcon} alt=""/></a>
                      <a href=""><img src={instagramIcon} alt=""/></a>
                      <a href=""><img src={youtubeIcon} alt=""/></a>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Footer;