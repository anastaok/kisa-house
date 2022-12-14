import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useState } from "react";

import "./header.scss";
import { TKisa } from "../../App";

import { FaCat } from "react-icons/fa";
import { GiBasket } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";

type TProps = {
  cartKisas: TKisa[];
};

const Header: React.FC<TProps> = ({ cartKisas }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
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
              Корзинка: <div className="cartNumber">{cartKisas.length}</div>
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
            <FaBars
              className={
                cartKisas.length ? "hamburgerIconRed" : "hamburgerIcon"
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
