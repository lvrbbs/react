import styles from "./header.module.css";

import Btn from "../btn/btn";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className={styles.header_content}>
            <p className="text">LOGO</p>
            <nav className={styles.menu}>
              <div className="menu_item">
                <Link to="/" className="link">
                  Главная
                </Link>
              </div>
              <div className="menu_item">
                <Link to="/catalog" className="link">
                  Каталог
                </Link>
              </div>
              <div className="menu_item">
                <Link to="/basket" className="link">
                  Корзина
                </Link>
              </div>
            </nav>
            <Btn title="войти" />
          </div>
        </div>
      </header>
    </>
  );
}
