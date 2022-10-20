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
      <div className="ftrContainer">
        <div className="ftrLeft">
          <h3 className="ftrTitle">Наша миссия</h3>
          <p className="ftrContent">«Каждой Кисе – любящий и теплый Дом!»</p>
          <p className="ftrContent">
            Все наши подопечные достойны найти своего Человека, чтобы любить и
            быть любимым.
          </p>
          <p className="ftrContent">А мы в этом с удовольствием поможем!</p>
        </div>
        <div className="ftrRight">
          <a className="ftrLink" href="/">
            <FaTelegram className="ftrIcon" />
            @kisa_house
          </a>
          <a className="ftrLink" href="/">
            <FaInstagramSquare className="ftrIcon" />
            @kisa_house
          </a>
          <a className="ftrLink" href="/">
            <FaMailBulk className="ftrIcon" />
            kisa_house@gmail.com
          </a>
          <a className="ftrLink" href="/">
            <FaPhoneSquare className="ftrIcon" /> +7 (123) 456-78-91
          </a>
          <a className="ftrLink" href="/">
            <FaMapMarkerAlt className="ftrIcon" /> г. Казань, ул. Петербургская,
            1
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
