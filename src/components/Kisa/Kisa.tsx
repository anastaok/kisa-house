import { NavLink } from "react-router-dom";
import { useState } from "react";
import { TKisa } from "../../App";
import Button from "../Button";
import "./Kisa.scss";

type TProps = {
  kisa: TKisa;
  setCartKisas: React.Dispatch<React.SetStateAction<TKisa[]>>;
};

const Kisa: React.FC<TProps> = ({ kisa, setCartKisas }) => {
  const [disabled, setDisabled] = useState(false);

  const func = () => {
    setCartKisas((prev: TKisa[]) => [...prev, kisa]);
    setDisabled(true);
    console.log(disabled);
  };

  return (
    <div className="kisaContainer">
      <div className="photoContainer">
        <NavLink to={`/kisa-info/${kisa.id}`}>
          <img src={kisa.imageUrl} alt="kisa-1" className="photoKisa" />
        </NavLink>
      </div>
      <div className="infoTitleKisa">
        {kisa.name},&nbsp;{kisa.age}
      </div>
      <Button width="md" onClick={func} disabled={disabled}>
        <p>Забрать кису</p>
      </Button>
    </div>
  );
};

export default Kisa;
