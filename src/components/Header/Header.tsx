import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

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
        <NavLink className="link" to="/">
          <div className="logoName">
            <div className="logoKisa">Киса</div>
            <div className="logoHouse">House</div>
          </div>
        </NavLink>
      </div>
      <div className="containerMenu">
        <ul className="navMenu">
          <li className="category">
            <NavLink className="categoryLink" to="/catalog">
              Выбрать друга
            </NavLink>
          </li>
          <li className="category">
            <NavLink className="categoryLink" to="/help">
              Помощь кисам
            </NavLink>
          </li>
          <li className="category">
            <Link className="categoryLink" to="footer" smooth={true}>
              Контакты
            </Link>
          </li>
        </ul>
        <NavLink className="link" to="/cart">
          <div className="cartWrapper">
            Корзинка
            <GiBasket className="iconCart" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
