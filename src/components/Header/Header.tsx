import { Link } from "react-router-dom";

import "./Header.scss";

import { FaCat } from "react-icons/fa";
import { GiBasket } from "react-icons/gi";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logoImg">
          <FaCat className="iconCat" />
        </div>
        <Link className="link" to="/">
          <div className="logoName">
            <div className="kisa">Киса</div>
            <div className="house">House</div>
          </div>
        </Link>
      </div>
      <div className="containerMenu">
        <ul className="navMenu">
          <li className="category">
            <Link className="categoryLink" to="/catalog">
              Выбрать друга
            </Link>
          </li>
          <li className="category">
            <Link className="categoryLink" to="/help">
              Помощь кисам
            </Link>
          </li>
          <li className="category">
            <Link className="categoryLink" to="/">
              Контакты
            </Link>
          </li>
        </ul>
        <Link className="link" to="/cart">
          <div className="cartWrapper">
            Корзинка
            <GiBasket className="iconCart" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
