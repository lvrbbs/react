import { Route, Routes } from "react-router-dom";
import Header from "./component/header/header";
import Banner from "./component/banner/banner";
import Main from "./page/main/main";
import Users from "./page/users/users";
import Library from "./page/library/library";
import Book from "./page/book/book";
import Add from "./page/add/add";
import "./assets/css/style.css";
import BasketPage from "./page/basket/basketPage";
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);
  return (
    <>
      <Header basket={basket} />
      <Banner />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<Users />} />
        <Route path="/library" element={<Library addtoBasket={setBasket} basket={basket}/>}/>
        <Route path="/library/:id" element={<Book />} />
        <Route path="/add" element={<Add />} />
        <Route path="/basket" element={<BasketPage basket={basket} />} />
      </Routes>
    </>
  );
}

export default App;
