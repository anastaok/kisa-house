import "./Cart.scss";
import cat1 from "../../content/img/1.jpg";
import { FaPaw } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="cart">
      <div className="wrapper-cart">
        <p>В Вашей корзинке уже сидят и ждут путешествия домой:</p>
        <div className="kisa-item">
          <img src={cat1} alt="kisa-1" className="photo" />
          <p className="name">Мурзик, 3 года</p>
          <div className="cancel">
            Еще подумать <FaPaw />
          </div>
        </div>
        <div className="kisa-item">
          <img src={cat1} alt="kisa-1" className="photo" />
          <p className="name">Мурзик, 3 года</p>
          <div className="cancel">
            Еще подумать <FaPaw />
          </div>
        </div>
        <div className="kisa-item">
          <img src={cat1} alt="kisa-1" className="photo" />
          <p className="name">Мурзик, 3 года</p>
          <div className="cancel">
            Еще подумать <FaPaw />
          </div>
        </div>
        <p>Число счастливых кис: 1</p>
      </div>
      <div className="kisa-form">
        <form>
          <strong>Оставьте Ваши контакты:</strong>
          <label>ФИО</label>
          <input type="text"></input>
          <label>Телефон</label>
          <input type="text"></input>
          <label>E-mail</label>
          <input type="text"></input>
          <label>Ваши вопросы или комментарии:</label>
          <textarea placeholder="Напишите сообщение здесь..."></textarea>
          <p>
            После отправки данных – с Вами свяжется наш помощник и объяснит
            дальнейшие действия
          </p>
          <button className="btn">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
