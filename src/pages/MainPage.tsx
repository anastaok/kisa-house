import Video from "../components/Video";
import Catalog from "../components/Catalog";
import { TKisa } from "../App";

type TProps = {
  kisas: TKisa[];
  setCartKisas: React.Dispatch<React.SetStateAction<TKisa[]>>;
};

const MainPage: React.FC<TProps> = ({ kisas, setCartKisas }) => {
  return (
    <div>
      <Video />
      <Catalog kisas={kisas} setCartKisas={setCartKisas} />
    </div>
  );
};

export default MainPage;
