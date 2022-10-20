import "./InfoKisaPage.scss";
import cat1 from "../../content/img/1.jpg";
import Button from "../Button";

const InfoKisaPage = () => {
  return (
    <div className="infoKisa">
      <div className="infoTop">
        <div className="infoPhotoContainer">
          <img src={cat1} alt="kisa-1" className="infoPhoto" />
          <Button width="lg">
            <p>Забрать кису</p>
          </Button>
        </div>
        <div className="infoMain">
          <h2>
            Имя: <span className="rubikText">Мурзик</span>
          </h2>
          <h2>
            Пол: <span className="rubikText">мальчик</span>
          </h2>
          <h2>
            Возраст: <span className="rubikText">3 года</span>
          </h2>
          <h2>
            Порода: <span>инфо</span>
          </h2>
        </div>
      </div>

      <div className="infoBottom">
        <div className="infoBottomWrapper">
          <span className="rubikText">Характер:</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga, ipsam animi vero nulla quas reiciendis fugit debitis tempora
            laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, sapiente?
          </p>
        </div>
        <div className="infoBottomWrapper">
          <span className="rubikText">Любимая еда:</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga, ipsam animi vero nulla quas reiciendis fugit debitis tempora
            laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, sapiente?
          </p>
        </div>
        <div className="infoBottomWrapper">
          <span className="rubikText">Какого хозяина ищет:</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga, ipsam animi vero nulla quas reiciendis fugit debitis tempora
            laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, sapiente?
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoKisaPage;
