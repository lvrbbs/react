import { Navigate, useParams } from "react-router-dom";
import { CARDS } from "../../component/data/data";
import img from "/library/book.png";
import style from "./book.module.css";

export default function Book() {
  const { id } = useParams();

  const bookItem = CARDS.find((bookItem) => bookItem.id == id);

  return bookItem ? (
    <div className="item">
      <div className="container">
        <div className="main_content">
          <div className={style.card_item_info}>
            <img src={img} alt="" className="img" />
            <div className={style.info}>
              <p className={style.color}>
                ID: <span className={style.text}>{id}</span>
              </p>
              <p className={style.color}>
                Name: <span className={style.text}>{bookItem.title}</span>
              </p>
              <p className={style.color}>
                Price: <span className={style.text}>{bookItem.price}</span>
              </p>
              <p className={style.color}>
                Category:<span className={style.text}>{bookItem.category}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/error" />
  );
}
