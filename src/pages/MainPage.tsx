import Video from "../components/Video";
import Catalog from "../components/Catalog";
import { TKisa } from "../App";

type TProps = {
  kisas: TKisa[];
};

const MainPage: React.FC<TProps> = ({ kisas }) => {
  return (
    <div>
      <Video />
      <Catalog kisas={kisas} />
    </div>
  );
};

export default MainPage;
