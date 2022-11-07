import React from "react";
import { FaPaw } from "react-icons/fa";

import { TKisa } from "../../App";
import Button from "../Button";
import CartForm from "../CartForm";
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
        {cartKisas.length ? (
          <p className="titleCart">
            В Вашей корзинке уже сидят и ждут путешествия домой:
          </p>
        ) : null}
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
          <p className="titleCart">{"Вы пока не осчатливили кис :("}</p>
        )}
        {cartKisas.length ? (
          <p className="titleCart">Число счастливых кис: {cartKisas.length}</p>
        ) : null}
      </div>

      {cartKisas.length ? <CartForm /> : null}
    </div>
  );
};

export default Cart;
