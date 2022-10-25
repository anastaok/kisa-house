import { NavLink } from "react-router-dom";
import { TKisa } from "../../App";
import Button from "../Button";
import "./Kisa.scss";

type TProps = {
  kisa: TKisa;
};

const Kisa: React.FC<TProps> = ({ kisa }) => {
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
      <Button width="md">
        <p>Забрать кису</p>
      </Button>
    </div>
  );
};

export default Kisa;
