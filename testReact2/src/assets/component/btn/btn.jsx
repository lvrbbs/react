import style from "./btn.module.css";

export default function Btn({ title }) {
  return (
    <button className={style.btn}>{title}</button>
  );
}
