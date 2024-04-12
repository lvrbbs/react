import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Card from "../../assets/component/card/card";

export default function Main({ addtoBasket, basket }) {
  const [posts, setshop] = useState([]);

  async function fetchShop() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/?_limit=6"
    );
    const posts = await response.json();

    setshop(posts);
  }
  useEffect(() => {
    fetchShop();
  }, []);

  const [query, setQuery] = useState("");
  function search(e) {
    setQuery(e.target.value);
  }

  const filterItem = posts.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <main>
        <div className="container">
          <div className="main_content">
            <div className="search">
              <input
                onChange={search}
                type="search"
                name="search"
                className="search_item"
                placeholder="search"
              />
            </div>

            <div className="filter">
              <div className="categories">
                <div className="catefory_item">
                  <a href="" className="link">
                    все
                  </a>
                </div>
                <div className="catefory_item">
                  <a href="" className="link">
                    домашние
                  </a>
                </div>
                <div className="catefory_item">
                  <a href="" className="link">
                    букет
                  </a>
                </div>
              </div>
              <div className="sort">
                <p className="link">Количество</p>
                <select className="sortItem">
                  <option value="ascOst">По возрастанию</option>
                  <option value="descOst">По убыванию</option>
                </select>
              </div>
            </div>

            <div className="catalog">
            {filterItem.length ? (
              filterItem.map((shop,id) => {
                return (
                  <Card key={id}
                  {...shop}
                  addCard={() => addtoBasket([...basket, shop.id])} />
                );
              })
            ):(
              <p className="text">jsdakf</p>
            )

            }
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
