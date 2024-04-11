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

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<CardPage />} />
      </Routes>
    </>
  );
}

export default App;
