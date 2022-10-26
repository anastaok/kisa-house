import React from "react";
import { FaPaw } from "react-icons/fa";

import Button from "../Button";
import { TKisa } from "../../App";
import "./Cart.scss";

type TProps = {
  cartKisas: TKisa[];
  setCartKisas: React.Dispatch<React.SetStateAction<TKisa[]>>;
};

const Cart: React.FC<TProps> = ({ cartKisas, setCartKisas }) => {
  const removeKisa = (id: number) => {
    setCartKisas(cartKisas.filter((kisa) => kisa.id !== id));
  };

  return (
    <div className="cart">
      <div className="wrapperCart">
        <p className="titleCart">
          В Вашей корзинке уже сидят и ждут путешествия домой:
        </p>
        {cartKisas.length ? (
          cartKisas.map((kisa) => (
            <React.Fragment key={kisa.id}>
              <div className="kisaItem">
                <img src={kisa.imageUrl} alt={kisa.name} className="photo" />
                <p className="name">{`${kisa.name}, ${kisa.age}`}</p>
                <Button width="sm" onClick={() => removeKisa(kisa.id)}>
                  <p>
                    Еще подумать
                    <FaPaw className="iconPaw" />
                  </p>
                </Button>
              </div>
            </React.Fragment>
          ))
        ) : (
          <p>{"Вы пока не осчатливили кис:("}</p>
        )}

        <p className="titleCart">Число счастливых кис: {cartKisas.length}</p>
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
