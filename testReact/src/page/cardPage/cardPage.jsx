import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
export default function CardPage() {
  const { id } = useParams();

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
                Name: <span className="">{bookItem.title}</span>
              </p>
              <p className="">
                Price: <span className="">{bookItem.body}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <p className="text">111</p>
  );
}
