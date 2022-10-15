import "./Footer.scss";

import {
  FaTelegram,
  FaInstagramSquare,
  FaMailBulk,
  FaMapMarkerAlt,
  FaPhoneSquare,
} from "react-icons/fa";
import Button from "../Button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ftr-container">
        <div className="ftr-left">
          <h3>Наша миссия</h3>
          <p>«Каждой Кисе – любящий и теплый Дом!»</p>
          <p>
            Все наши подопечные достойны найти своего Человека, чтобы любить и
            быть любимым.
          </p>
          <p>А мы в этом с удовольствием поможем!</p>
        </div>
        <div className="ftr-right">
          <a href="/">
            <FaTelegram className="icon" />
            @kisa_house
          </a>
          <a href="/">
            <FaInstagramSquare className="icon" />
            @kisa_house
          </a>
          <a href="/">
            <FaMailBulk className="icon" />
            kisa_house@gmail.com
          </a>
          <a href="/">
            <FaPhoneSquare className="icon" /> +7 (123) 456-78-91
          </a>
          <a href="/">
            <FaMapMarkerAlt className="icon" /> г. Казань, ул. Петербургская, 1
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
