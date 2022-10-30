import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useState } from "react";

import "./Header.scss";

import { FaCat } from "react-icons/fa";
import { GiBasket } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
        <ul className={click ? "navMenu active" : "navMenu"}>
          <li className="category" onClick={closeMobileMenu}>
            <NavLink className="categoryLink" to="/catalog">
              Выбрать друга
            </NavLink>
          </li>
          <li className="category" onClick={closeMobileMenu}>
            <NavLink className="categoryLink" to="/help">
              Помощь кисам
            </NavLink>
          </li>
          <li className="category" onClick={closeMobileMenu}>
            <Link className="categoryLink" to="footer" smooth={true}>
              Контакты
            </Link>
          </li>
          <li className="category cartWrapper" onClick={closeMobileMenu}>
            <NavLink className="categoryLink" to="/cart">
              Корзинка
              <GiBasket className="iconCart" />
            </NavLink>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes className="hamburgerIcon" />
          ) : (
            <FaBars className="hamburgerIcon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
