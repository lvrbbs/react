/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'  */
/* import './App.css' */

import { Route, Routes } from "react-router-dom";
import Main from "./page/main/mainPage";
import Header from "./assets/component/header/header";
import "./assets/css/style.css";
import CardPage from "./page/cardPage/cardPage";
import Banner from "./assets/component/banner/banner";
import BasketPage from "./page/basket/BasketPage";
import { useState } from "react";

function App() {
  const [basket,setBasket] = useState([])

  return (
    <>
      <Header basket={basket}/>
      <Banner />
      <Routes>
        <Route path="/" element={<Main addToBasket={setBasket} basket={basket} />} />
        <Route path="/:id" element={<CardPage />} />
        <Route path="/basket" element={<BasketPage basket={basket} />} />
      </Routes>
    </>
  );
}

export default App;
