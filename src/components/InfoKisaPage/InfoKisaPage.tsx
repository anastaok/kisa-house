import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "../Button";
import { TKisa } from "../../App";
import "./InfoKisaPage.scss";

type TProps = {
  kisas: TKisa[];
  setCartKisas: React.Dispatch<React.SetStateAction<TKisa[]>>;
  cartKisas: TKisa[];
};

const InfoKisaPage: React.FC<TProps> = ({ kisas, setCartKisas, cartKisas }) => {
  const { id } = useParams();
  // const isMobile = useMediaQuery() === 'mobile'

  const [filteredKisa, setFilteredKisa] = useState<TKisa | null>(null);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const filter = kisas.filter((kisa) => kisa.id === Number(id))[0];

    setFilteredKisa(filter);
  }, [kisas]);

  const takeKisa = () => {
    filteredKisa && setCartKisas((prev: TKisa[]) => [...prev, filteredKisa]);
  };

  const isDisabled = () => {
    return Boolean(cartKisas.find((item) => item.id === filteredKisa?.id));
  };

  return (
    <div className="infoKisa">
      <div className="infoTop">
        <div className="infoPhotoContainer">
          <img
            src={filteredKisa?.imageUrl}
            alt="kisa-1"
            className="infoPhoto"
          />
          {/* <Button width={isMobile ? 'sm' : 'lg'} onClick={takeKisa} disabled={isDisabled()}> */}
          <Button width="lg" onClick={takeKisa} disabled={isDisabled()}>
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
            Порода: <span className="rubikText">{filteredKisa?.breed}</span>
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
