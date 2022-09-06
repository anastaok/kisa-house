import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo-img">img</div>
        <div className="logo-name">
          <div
            style={{
              fontFamily: "Caveat",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Киса
          </div>
          <div
            style={{
              fontSize: "1.3rem",
            }}
          >
            House
          </div>
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
        <div className="cart">корзинка</div>
      </div>
    </div>
  );
};

export default Header;
