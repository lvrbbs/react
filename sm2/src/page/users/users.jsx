import { useEffect, useState } from "react";
import style from "./user.module.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="users">
      <div className="container">
        <div className="main_content">
          <h2 className="title">Пользователи</h2>
          <div className={style.content}>
            {users.map((user) => {
              return (
                <div className={style.info} key={user.name}>
                  <p className={style.name}>{user.username}</p>
                  <p className="text">{user.phone}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
