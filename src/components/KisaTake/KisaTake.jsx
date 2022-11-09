import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "./KisaTake.scss";

const KisaTake = () => {
  const navigate = useNavigate();
  const backToHome = () => navigate("/");

  return (
    <div className="kisaTake">
      <p className="titleKisaTake">
        Отлично, все данные отправлены!
        <p className="titleKisaTake">
          Скоро с Вами свяжется наш помощник и объяснит дальнейшие действия.
        </p>
        <Button width="lg" onClick={backToHome}>
          {"Вернуться на главную"}
        </Button>
      </p>
    </div>
  );
};

export default KisaTake;
