import "./Header.scss";

import { FaCat } from "react-icons/fa";
import { GiBasket } from "react-icons/gi";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo-img">
          <FaCat className="icon-cat" />
        </div>
        <div className="logo-name">
          <div className="kisa">Киса</div>
          <div className="house">House</div>
        </div>
      </div>
      <div className="container-menu">
        <ul className="nav-menu">
          <li>
            <a href="/">Выбрать друга</a>
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
          <GiBasket className="icon-bsk" />
        </div>
      </div>
    </div>
  );
};

export default Header;
