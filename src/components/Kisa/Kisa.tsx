import "./Kisa.scss";
import cat1 from "../../content/img/1.jpg";
import Button from "../Button";

const Kisa = () => {
  return (
    <div className="kisaContainer">
      <div className="photoContainer">
        <a href="/">
          <img src={cat1} alt="kisa-1" className="photoKisa" />
        </a>
      </div>
      <div className="infoKisa">Мурзик, 3 года</div>
      <Button width="md">
        <p>Забрать кису</p>
      </Button>
    </div>
  );
};

export default Kisa;
