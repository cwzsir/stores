import React from "react";
import './App.css';
import shopBodyStyle from "./Shop-body.module.css"
import Header from "./components/header/Header.js"
import BodyFilter from "./components/body-filter/Body-filter";


function App() {
  return (
      <>
        <Header/>
        <div className={shopBodyStyle.shopBody}>
          <BodyFilter/>
        </div>
      </>
  );
}

export default App;
