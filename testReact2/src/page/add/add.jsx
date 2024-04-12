import { useState } from "react";

export default function Add() {
  const [message, setMessage] = useState();
  function Create(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("https://reactapi.pautinaweb.ru/objects.php", {
      method: "POST",
      body: data,
    });
    event.target.reset();
    setMessage("Отправлено, назад пути нет");
  }
  return (
    <div className="add">
      <div className="container">
        <div className="">
          <h2 className="title">Добавление</h2>
          <form action="" onSubmit={Create} className="">
            <input
              type="text"
              name="title"
              id=""
              placeholder="title"
              className=""
            />
            <input
              type="text"
              name="body"
              id=""
              placeholder="body"
              className=""
            />
            <input type="submit" value="Добавить" className="btn" />
            {message}
          </form>
        </div>
      </div>
    </div>
  );
}
