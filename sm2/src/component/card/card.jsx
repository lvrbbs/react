import Btn from "../btn/btn";/* 
import { useState } from "react";
import Modal from "react-modal";
import CreatePage from "../../page/add/add"; */

export default function Card({ title, category, price, id, ost, addCard }) {
 /*  const [modalIsOpen, setModalIsOpen] = useState(false); */

/*   function showModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
 */
  return (
    <div className="card">
      <div className="img_card"></div>
      <div className="info_cards">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>
        <h3 className="title">Осталось: {ost}</h3>
        <p className="text">
          <span className="color">Цена:</span> {price} ₽
        </p>
        <button className="btn" onClick={addCard}>В корзину</button>
        {/* <button className="btn" onClick={ost ? "" : showModal}>
          {ost ? "в корзину" : "заказать"}
        </button> */}

        <Btn title="Подробнее" id={id} />
{/* 
        <Modal isOpen={modalIsOpen}>
          <button className="btn" onClick={closeModal}>
            закрыть
          </button>
          <CreatePage/>
        </Modal> */}
      </div>
    </div>
  );
}
