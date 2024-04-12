import { useEffect, useState } from "react";
import Card from "../../assets/component/card/card";

export default function BasketPage({basket}) {
  const [posts, setshop] = useState([]);

  async function fetchShop() {
    const response = await fetch("https://reactapi.pautinaweb.ru/objects.php");
    const posts = await response.json();

    setshop(posts);
  }
  useEffect(() => {
    fetchShop();
  }, []);
    const cardProducts = basket.map((id) => posts.find((item) => item.id == id));

  return (
    <>
      <div className="container">
        <h1>Корзина</h1>
        <p className="text"></p>
        {cardProducts.map((shop, id) => {
          return (
            <div className="info" key={id}>
              <p className="text">{shop.title}</p>
            </div>
        );
        })}
      </div>
    </>
  );
}
