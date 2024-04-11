import { useState } from "react";
import style from "./accordion.module.css";

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={style.item}>
        <div className={style.question} onClick={() => setIsActive(!isActive)}>
          <h3 className="title">{title}</h3>
          <div className="plus">{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className={style.content}>{content}</div>}
      </div>
    </>
  );
}
