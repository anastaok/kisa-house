import { Link } from "react-router-dom";

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
        <Link to="/">
          <div className="logo-name">
            <div className="kisa">Киса</div>
            <div className="house">House</div>
          </div>
        </Link>
      </div>
      <div className="container-menu">
        <ul className="nav-menu">
          <li>
            <Link to="/">Выбрать друга</Link>
          </li>
          <li>
            <Link to="/help">Помощь кисам</Link>
          </li>
          <li>
            <Link to="/">Контакты</Link>
          </li>
        </ul>
        <Link to="/cart">
          <div className="cart">
            Корзинка
            <GiBasket className="icon-bsk" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
