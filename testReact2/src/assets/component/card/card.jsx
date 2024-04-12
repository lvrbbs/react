import { Link } from "react-router-dom";
import style from "./btn.module.css";

import { useState } from "react";
import Modal from "react-modal";
import Add from "../../../page/add/add";

export default function Card({ name, description, price, sclad, id, addCard }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function showModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="catalog_item">
      <h2>{name}</h2>
      <p className="text">описание: {description}</p>
      <p className="text">Цена: {price}</p>
      <p className="text">ост:{sclad}</p>
      <Link to={`${id}`} className="link">
        Подробнее
      </Link>
      
      <button className="btn" onClick={sclad ? addCard : showModal}>
        {sclad ? "в корзину" : "заказать"}
      </button>

      <Modal isOpen={modalIsOpen}>
        <button className="btn" onClick={closeModal}>
          закрыть
        </button>
        <Add />
      </Modal>
    </div>
  );
}
