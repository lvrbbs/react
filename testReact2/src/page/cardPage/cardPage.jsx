import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
export default function CardPage() {
  const { id } = useParams();

  const [posts, setshop] = useState([]);

  async function fetchShop() {
    const response = await fetch("https://reactapi.pautinaweb.ru/objects.php");
    const posts = await response.json();

    setshop(posts);
  }
  useEffect(() => {
    fetchShop();
  }, []);

  const bookItem = posts.find((bookItem) => bookItem.id == id);

  return bookItem ? (
    <>
      <div className="item">
        <div className="container">
          <div className="item_content">
            <div className="">
              <p className="">
                ID: <span className="">{id}</span>
              </p>
              <p className="">
                Name: <span className="">{bookItem.name}</span>
              </p>
              <p className="">
                Price: <span className="">{bookItem.description}</span>
              </p>
              <p className="text">Цена: {bookItem.price}</p>
              <p className="text">ост:{bookItem.sclad}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <p className="text">111</p>
  );
}
