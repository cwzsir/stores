import React from 'react';
import addBannerStyle from "./AddBanner.module.css"
import appStore from "../../icon/appStoreButton.svg"
import googlePlay from "../../icon/googlePlayButton.svg"
import addBannerIphone from "../../img/addBannerIphone.svg"
import addBannerQRCode from "../../img/addBannerQRCode.svg"

const AddBanner = () => {
    return(
        <div className={addBannerStyle.addBannerBody}>
            <div className={addBannerStyle.addBannerLinks}>
                <h2>Кэшбек на все товары <br/>
                    в новом приложении Stores</h2>
                <div>
                    <a href="#"><img src={appStore} alt=""/></a>
                    <a href="#"><img src={googlePlay} alt=""/></a>
                </div>
            </div>

            <div className={addBannerStyle.addBannerImage}>
                <img src={addBannerIphone} alt=""/>
            </div>

            <div className={addBannerStyle.addBannerQRCode}>
                <img src={addBannerQRCode} alt=""/>
                <p>Наведите камеру <br/>
                    на QR-код, чтобы <br/>
                    скачать</p>
            </div>
        </div>
    )
};

export default AddBanner;