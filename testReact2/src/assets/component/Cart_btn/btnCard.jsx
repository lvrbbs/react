import style from "./btn.module.css";

export default function BtnCard({ title, addCard }) {
  return (
    <button className={style.btn} onClick={addCard}>{title}</button>
  );
}
