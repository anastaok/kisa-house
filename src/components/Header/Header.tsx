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
        <NavLink className="link" to="/" onClick={closeMobileMenu}>
          <div className="logoName">
            <div className="logoKisa">Киса</div>
            <div className="logoHouse">House</div>
          </div>
        </NavLink>
      </div>
      <div className="containerMenu">
        <ul className={click ? "navMenu active" : "navMenu"}>
          <NavLink
            className="categoryLink"
            to="/catalog"
            onClick={closeMobileMenu}
          >
            <li className="category">Выбрать друга</li>
          </NavLink>
          <NavLink className="categoryLink" to="/help">
            <li className="category" onClick={closeMobileMenu}>
              Помощь кисам
            </li>
          </NavLink>
          <Link
            className="categoryLink"
            to="footer"
            smooth={true}
            onClick={closeMobileMenu}
          >
            <li className="category" onClick={closeMobileMenu}>
              Контакты
            </li>
          </Link>
          <NavLink className="categoryLink" to="/cart">
            <li className="category" onClick={closeMobileMenu}>
              Корзинка
              <div className="cartImg">
                <GiBasket className="iconCart" />
              </div>
            </li>
          </NavLink>
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
