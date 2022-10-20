import { TKisa } from "../../pages/MainPage/MainPage";
import "./Kisa.scss";

type TProps = {
  kisa: TKisa;
};

const Kisa: React.FC<TProps> = ({ kisa }) => {
  return (
    <div className="kisa-container">
      <div className="photo-container">
        <a href="/">
          <img src={kisa.imageUrl} alt="kisa-1" className="photo" />
        </a>
      </div>
      <div className="info">
        {kisa.name},&nbsp;{kisa.age}
      </div>
    </div>
  );
};

export default Kisa;
