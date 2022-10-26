import "./Catalog.scss";
import Kisa from "../../components/Kisa";
import { TKisa } from "../../App";

type TProps = {
  kisas: TKisa[];
  setCartKisas: React.Dispatch<React.SetStateAction<TKisa[]>>;
};

const Catalog: React.FC<TProps> = ({ kisas, setCartKisas }) => {
  return (
    <div className="catalog">
      {kisas.map((kisa) => (
        <Kisa key={kisa.id} kisa={kisa} setCartKisas={setCartKisas} />
      ))}
    </div>
  );
};

export default Catalog;
