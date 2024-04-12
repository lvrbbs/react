import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Card from "../../assets/component/card/card";

export default function Main({ addToBasket, basket }) {
  const [posts, setshop] = useState([]);

  async function fetchShop() {
    const response = await fetch("https://reactapi.pautinaweb.ru/objects.php");
    const posts = await response.json();

    setshop(posts);
  }
  useEffect(() => {
    fetchShop();
  }, []);

  const [sorting, setSorting] = useState("");
  1;

  function sort(event) {
    const sortValue = event.target.value;
    setSorting(sortValue);
  }

  const sortItem = (sorting, posts) => {
    switch (sorting) {
      case "asc":
        return [...posts].sort((a, b) => a.price - b.price);
      case "desc":
        return [...posts].sort((a, b) => b.price - a.price);
      default:
        return posts;
    }
  };

  const [query, setQuery] = useState("");
  function search(e) {
    setQuery(e.target.value);
  }

  const filterItem = posts.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const sortAndFilterProduct = sortItem(sorting, filterItem);
  return (
    <>
      <main>
        <div className="container">
          <div className="main_content">
            <div className="search">
              <div className="">
                <input
                  onChange={search}
                  type="search"
                  name="search"
                  className=""
                  placeholder="search"
                />
              </div>
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
              <div className="">
                <div className="filter_item">
                  <h3 className="title">Цена</h3>
                  <select onChange={sort} className="">
                    <option value="asc">По возрастанию</option>
                    <option value="desc">По убыванию</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="catalog">
              {sortAndFilterProduct.length ? (
                sortAndFilterProduct.map((shop, id) => {
                  return (
                    <Card
                      key={id}
                      {...shop}
                      addCard={() => addToBasket([...basket, shop.id])}
                    />
                  );
                })
              ) : (
                <h2>skdjflsjdf</h2>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
