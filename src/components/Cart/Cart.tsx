import "./Cart.scss";
import cat1 from "../../content/img/1.jpg";
import { FaPaw } from "react-icons/fa";
import Button from "../Button";

const Cart = () => {
  return (
    <div className="cart">
      <div className="wrapperCart">
        <p className="titleCart">
          В Вашей корзинке уже сидят и ждут путешествия домой:
        </p>
        <div className="kisaItem">
          <img src={cat1} alt="kisa-1" className="photo" />
          <p className="name">Мурзик, 3 года</p>
          <Button width="sm">
            <p>
              Еще подумать
              <FaPaw className="iconPaw" />
            </p>
          </Button>
        </div>
        <div className="kisaItem">
          <img src={cat1} alt="kisa-1" className="photo" />
          <p className="name">Мурзик, 3 года</p>
          <Button width="sm">
            <p>
              Еще подумать
              <FaPaw className="iconPaw" />
            </p>
          </Button>
        </div>
        <div className="kisaItem">
          <img src={cat1} alt="kisa-1" className="photo" />
          <p className="name">Мурзик, 3 года</p>
          <Button width="sm">
            <p>
              Еще подумать
              <FaPaw className="iconPaw" />
            </p>
          </Button>
        </div>

        <p className="titleCart">Число счастливых кис: 1</p>
      </div>
      <div className="containerForm">
        <form className="formCart">
          <strong>Оставьте Ваши контакты:</strong>
          <label className="contentForm">ФИО</label>
          <input className="formData" type="text"></input>
          <label className="contentForm">Телефон</label>
          <input className="formData" type="text"></input>
          <label className="contentForm">E-mail</label>
          <input className="formData" type="text"></input>
          <label className="contentForm">Ваши вопросы или комментарии:</label>
          <textarea
            className="formData"
            placeholder="Напишите сообщение здесь..."
          ></textarea>
          <p className="titleCart">
            После отправки данных – с Вами свяжется наш помощник и объяснит
            дальнейшие действия
            <Button width="lg">
              <p>Отправить</p>
            </Button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Cart;
