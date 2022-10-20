import "./InfoKisaPage.scss";
import cat1 from "../../content/img/1.jpg";

const InfoKisaPage = () => {
  return (
    <div className="info-kisa">
      <div className="info-top">
        <div className="info-photo">
          <div className="photo">
            <img src={cat1} alt="kisa-1" className="photo" />
          </div>
          <div className="btn">Забрать кису</div>
        </div>
        <div className="info-main">
          <h2>
            Имя: <span>Мурзик</span>
          </h2>
          <h2>
            Пол: <span>мальчик</span>
          </h2>
          <h2>
            Возраст: <span>3 года</span>
          </h2>
          <h2>
            Порода: <span>инфо</span>
          </h2>
        </div>
      </div>

      <div className="info-bottom">
        <div className="info-bottom-wrapper">
          <span>Характер:</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga, ipsam animi vero nulla quas reiciendis fugit debitis tempora
            laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, sapiente?
          </p>
        </div>
        <div className="info-bottom-wrapper">
          <span>Любимая еда:</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga, ipsam animi vero nulla quas reiciendis fugit debitis tempora
            laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, sapiente?
          </p>
        </div>
        <div className="info-bottom-wrapper">
          <span>Какого хозяина ищет:</span>
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
