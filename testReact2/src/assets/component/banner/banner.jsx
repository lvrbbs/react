import Btn from "../btn/btn";


export default function Banner() {
  return (
    <header>
      <div className="banner">
        <div className="container">
          <div className="banner_content">
            <h1 className="slogan">LEAF -</h1>
            <h2 className="text">библиотека для любого </h2>
            <Btn title="в каталог" />
          </div>
        </div>
      </div>
    </header>
  );
}