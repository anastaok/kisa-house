import "./InfoKisaPage.scss";
import Button from "../Button";
import { TKisa } from "../../App";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

type TProps = {
  kisas: TKisa[];
};

const InfoKisaPage: React.FC<TProps> = ({ kisas }) => {
  const { id } = useParams();

  const [filteredKisa, setFilteredKisa] = useState<TKisa | null>(null);
  useEffect(() => {
    const filter = kisas.filter((kisa) => kisa.id === Number(id))[0];
    setFilteredKisa(filter);
  }, []);

  return (
    <div className="infoKisa">
      <div className="infoTop">
        <div className="infoPhotoContainer">
          <img
            src={filteredKisa?.imageUrl}
            alt="kisa-1"
            className="infoPhoto"
          />
          <Button width="lg">
            <p>Забрать кису</p>
          </Button>
        </div>
        <div className="infoMain">
          <h2>
            Имя: <span className="rubikText">{filteredKisa?.name}</span>
          </h2>
          <h2>
            Пол: <span className="rubikText">{filteredKisa?.gender}</span>
          </h2>
          <h2>
            Возраст: <span className="rubikText">{filteredKisa?.age}</span>
          </h2>
          <h2>
            Порода: <span>{filteredKisa?.breed}</span>
          </h2>
        </div>
      </div>

      <div className="infoBottom">
        <div className="infoBottomWrapper">
          <span className="rubikText">Характер:</span>
          <p>{filteredKisa?.character}</p>
        </div>
        <div className="infoBottomWrapper">
          <span className="rubikText">Любимая еда:</span>
          <p>{filteredKisa?.food}</p>
        </div>
        <div className="infoBottomWrapper">
          <span className="rubikText">Какого хозяина ищет:</span>
          <p>{filteredKisa?.owner}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoKisaPage;
