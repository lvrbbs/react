import { Button, Card, Modal } from "react-bootstrap";
import Btn from "../btn/btn";
import { useState } from "react";
import CreatePage from '../../page/add/add'


export default function CardComp({ title, category, price, id, ost, addCard }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function showModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <div className="img_card"></div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{ost}</Card.Text>
          <Card.Text>Осталось: {ost}</Card.Text>
          <Card.Text>Цена: {price} ₽</Card.Text>
          <button className="btn" onClick={ost ? "" : showModal}>
            {ost ? "в корзину" : "заказать"}
          </button>
          {/* <Button variant="primary" onClick={addCard}>В корзину</Button> */}
          <Btn title="Подробнее" id={id} />
        </Card.Body>
      </Card>
      <Modal show={modalIsOpen} onHide={closeModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <CreatePage />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
}
