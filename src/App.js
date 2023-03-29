import React from "react";
import './App.css';
import shopBodyStyle from "./Shop-body.module.css"
import Header from "./components/header/Header.js"
import BodyFilter from "./components/shop-body/body-filter/Body-filter";
import ListFilter from "./components/shop-body/list-filter/List-filter";
import BestSuggestion from "./components/shop-body/best-suggestion/Best-suggestion";
import BuyingBody from "./components/shop-body/buying-body/Buying-body";

function App() {
  return (
      <>
        <Header/>
        <div className={shopBodyStyle.shopBody}>
            <BodyFilter/>
            <div className={shopBodyStyle.buyBody}>
                    <ListFilter/>
                    <BestSuggestion/>
                    <BuyingBody/>
            </div>
        </div>
      </>
  );
}

export default App;
