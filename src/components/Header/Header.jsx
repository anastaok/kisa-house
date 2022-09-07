import React from "react";
import "./header.scss";

import { FaCat } from "react-icons/fa";
import { GiBasket } from "react-icons/gi";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo-img">
          <FaCat size={30} style={{ color: "#333" }} />
        </div>
        <div className="logo-name">
          <div className="kisa">Киса</div>
          <div className="house">House</div>
        </div>
      </div>
      <div className="container-menu">
        <ul className="nav-menu">
          <li>
            <a href="/">О нас</a>
          </li>
          <li>
            <a href="/">Помощь кисам</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
        </ul>
        <div className="cart">
          Корзинка
          <GiBasket
            size={25}
            style={{ color: "#333", margin: "0 0 3px 3px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
