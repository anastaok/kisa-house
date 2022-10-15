import "./Kisa.scss";
import cat1 from "../../content/img/1.jpg";
import Button from "../Button";

const Kisa = () => {
  return (
    <div className="kisa-container">
      <div className="photo-container">
        <a href="/">
          <img src={cat1} alt="kisa-1" className="photo" />
        </a>
      </div>
      <div className="info">Мурзик, 3 года</div>
      <Button text="Забрать Кису" width="sm" />
    </div>
  );
};

export default Kisa;
