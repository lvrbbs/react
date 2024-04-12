import { Link } from "react-router-dom";
import style from "./btn.module.css";

export default function Card({ title, body, addCard }) {
  return (
    <div className="catalog_item">
      <h2>{title}</h2>
      <p className="text">{body}</p>
      <Link to="" className="link">
        Подробнее
      </Link>
      <button className="btn" onClick={addCard}>
        В корзину
      </button>
    </div>
  );
}
