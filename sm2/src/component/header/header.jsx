import Logo from "/header/logo.png";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

const LINKS = [
  { name: "Главная", href: "/" },
  { name: "Библиотека", href: "/library" },
  { name: "Пользователи", href: "/users" },
  { name: "Добавить", href: "/add" },
  { name: "Корзина", href: "/basket" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_content}>
          <a href="" className="link">
            <img src={Logo} alt="" className="logo" />
          </a>
          <nav className={styles.menu}>
            {LINKS.map((item) => (
              <div className={styles.menu_item} key={item.name}>
                <NavLink to={item.href} className={styles.link}>
                  {item.name}
                </NavLink>
              </div>
            ))}
          </nav>
          <div className="header_buttons">
            <a href="" className="btn">
              войти
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
