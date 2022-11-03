import "./HelpKisa.scss";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiCat } from "react-icons/gi";
import cat1 from "../../content/img/help/cat-eat.jpg";
import cat2 from "../../content/img/help/cat-sick.jpg";
import cat3 from "../../content/img/help/cat-home.jpg";

const HelpKisa = () => {
  return (
    <div className="helpKisa">
      <div className="helpTop">
        <div className="helpText">
          <h2 className="helpTitle">Помощь Кисам</h2>
          <p className="helpContent">
            Если Вы не можете или не хотите брать нового Друга домой сейчас – Вы
            всегда можете помочь кисам другими способами. Например, можно
            пожертвовать денежку <FaMoneyBillWave />
          </p>
        </div>
        <div className="helpCategoryWrapper">
          <div className="helpCategory">
            <a href="/">
              <img src={cat1} alt="kisa-1" className="photoCategory" />
              <h2>На кушанье</h2>
            </a>
          </div>
          <div className="helpCategory">
            <a href="/">
              <img src={cat2} alt="kisa-1" className="photoCategory" />
              <h2>На здоровье</h2>
            </a>
          </div>
          <div className="helpCategory">
            <a href="/">
              <img src={cat3} alt="kisa-1" className="photoCategory" />
              <h2>На комфорт</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="helpBottom">
        <div className="helpText">
          <p className="helpContent">
            Или Вы всегда можете приехать в приют, привезти подарки, еду и
            познакомиться с нашими обитателями лично <GiCat />
          </p>
          <p className="helpContent">
            Найти нас можно по адресу: <b>г. Казань, ул. Петербургская, 1</b>
          </p>
        </div>

        <div className="mapCounter">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A24880c51b43c7db577f957f326117d944dea2594b1e191e49be94fbe35c98f86&amp;source=constructor"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HelpKisa;
