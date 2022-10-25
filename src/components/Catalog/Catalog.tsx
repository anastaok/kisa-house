import "./Catalog.scss";
import Kisa from "../../components/Kisa";
import { TKisa } from "../../App";

type TProps = {
  kisas: TKisa[];
};

const Catalog: React.FC<TProps> = ({ kisas }) => {
  return (
    <div className="catalog">
      {kisas.map((kisa) => (
        <Kisa key={kisa.id} kisa={kisa} />
      ))}
    </div>
  );
};

export default Catalog;
