import Info from "/main/info.png";
import SliderMain from "../../component/slider/slider";
import Accordion from "../../component/accordion/accordion";

export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main_content">
          <div className="info">
            <img src={Info} alt="" className="img" />
            <div className="info_content">
              <h2 className="slogan">Leaf</h2>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                aliquid, placeat doloremque deleniti quos aliquam officiis
                maxime temporibus quia debitis ex? Et perspiciatis iure illum
                exercitationem eos facilis non sint.
              </p>
            </div>
          </div>
          <SliderMain />
          <div className="accordion">
          <Accordion title="first" content="content first accordion"/>
          <Accordion title="second" content="content second accordion"/>
          <Accordion title="third" content="content third accordion"/>
          </div>
        </div>
      </div>
    </main>
  );
}
