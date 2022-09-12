import React from "react";
import "./InfoKisa.scss";

const InfoKisa = () => {
  return (
    <div className="info-kisa">
      <div className="info">
        <div className="info-photo">
          <div className="photo">photo</div>
          <div className="btn">Забрать кису</div>
        </div>
        <div className="info-main">
          <h2>
            Имя:
            <span>Мурзик</span>
          </h2>
          <h2>
            Пол: <span>мальчик</span>
          </h2>
          <h2>
            Возраст: <span>3 года</span>
          </h2>
          <h2>
            Инфо: <span>инфо</span>
          </h2>
        </div>

        <div className="info-bottom">
          <span>Характер:</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga, ipsam animi vero nulla quas reiciendis fugit debitis tempora
            laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, sapiente?
          </p>
          <span>Любимая еда:</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fuga, ipsam animi vero nulla quas reiciendis fugit debitis tempora
            laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, sapiente?
          </p>
          <span>Каких хозяев ищет:</span>
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

export default InfoKisa;
