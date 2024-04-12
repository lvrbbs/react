import { useEffect, useState } from "react";

export default function BasketPage({ basket }) {
  const [posts, setshop] = useState([]);

  async function fetchShop() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/?_limit=6"
    );
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
        {cardProducts.map((product,index) => (
          <p className="text" key={index}>hhdhhd</p>
        ))}
      </div>
    </>
  );
}
