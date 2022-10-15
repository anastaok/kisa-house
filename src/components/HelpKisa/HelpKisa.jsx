import "./HelpKisa.scss";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiCat } from "react-icons/gi";
import cat1 from "../../content/img/help/cat-eat.jpg";
import cat2 from "../../content/img/help/cat-sick.jpg";
import cat3 from "../../content/img/help/cat-home.jpg";

const HelpKisa = () => {
  return (
    <div className="help-kisa">
      <div className="help-top">
        <div className="text">
          <h2>Помощь Кисам</h2>
          <p>
            Если Вы не можете или не хотите брать нового Друга домой сейчас – Вы
            всегда можете помочь кисам другими способами. Например, можно
            пожертвовать денежку <FaMoneyBillWave />
          </p>
        </div>
        <div className="help-options">
          <div className="option">
            <a href="/">
              <img src={cat1} alt="kisa-1" className="photo" />
              <h2>На кушанье</h2>
            </a>
          </div>
          <div className="option">
            <a href="/">
              <img src={cat2} alt="kisa-1" className="photo" />
              <h2>На здоровье</h2>
            </a>
          </div>
          <div className="option">
            <a href="/">
              <img src={cat3} alt="kisa-1" className="photo" />
              <h2>На комфорт</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="help-bottom">
        <div className="text">
          <p>
            Или Вы всегда можете приехать в приют, привезти подарки, еду и
            познакомиться с нашими обитателями лично <GiCat />
          </p>
          <p>
            Найти нас можно по адресу: <b>г. Казань, ул. Петербургская, 1</b>
          </p>
        </div>
        <div className="map-counter">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A24880c51b43c7db577f957f326117d944dea2594b1e191e49be94fbe35c98f86&amp;source=constructor"
            width="700"
            height="300"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HelpKisa;
