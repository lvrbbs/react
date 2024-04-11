import { CARDS } from "../../component/data/data";

export default function BasketPage({ basket }) {
  const cardProducts = basket.map((id) => CARDS.find((item) => item.id == id));
  const summa = cardProducts.reduce((summ, item) => summ + item.price, 0);

  return (
    <>
      <h1>Корзина</h1>
      {cardProducts.map((product) => (
        <div key={product.id} className="card">
          <h3>{product.title}</h3>
          <h3>{product.price}</h3>
        </div>
      ))}
      <h3>COST: {summa} р.</h3>
    </>
  );
}
