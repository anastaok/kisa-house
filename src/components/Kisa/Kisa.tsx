import { TKisa } from "../../pages/MainPage/MainPage";
import Button from "../Button";
import "./Kisa.scss";

type TProps = {
  kisa: TKisa;
};

const Kisa: React.FC<TProps> = ({ kisa }) => {
  return (
    <div className="kisaContainer">
      <div className="photoContainer">
        <a href="/">
          <img src={kisa.imageUrl} alt="kisa-1" className="photo" />
        </a>
      </div>
      <div className="info">
        {kisa.name},&nbsp;{kisa.age}
      </div>
      <Button width="md">
        <p>Забрать кису</p>
      </Button>
    </div>
  );
};

export default Kisa;
