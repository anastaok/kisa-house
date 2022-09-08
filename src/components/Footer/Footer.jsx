import React from "react";
import "./Footer.scss";

import {
  FaTelegram,
  FaInstagramSquare,
  FaMailBulk,
  FaMapMarkerAlt,
  FaPhoneSquare,
} from "react-icons/fa";

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
            <FaTelegram
              size={20}
              style={{ color: "#333", marginRight: "3px" }}
            />
            @kisa_house
          </a>
          <a href="/">
            <FaInstagramSquare
              size={20}
              style={{ color: "#333", marginRight: "3px" }}
            />
            @kisa_house
          </a>
          <a href="/">
            <FaMailBulk
              size={20}
              style={{ color: "#333", marginRight: "3px" }}
            />
            kisa_house@gmail.com
          </a>
          <a href="/">
            <FaPhoneSquare
              size={20}
              style={{ color: "#333", marginRight: "3px" }}
            />{" "}
            +7 (123) 456-78-91
          </a>
          <a href="/">
            <FaMapMarkerAlt
              size={20}
              style={{ color: "#333", marginRight: "3px" }}
            />{" "}
            г. Казань, ул. Петербургская, 1
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
