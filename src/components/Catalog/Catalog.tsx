import "./Catalog.scss";
import { useState, useEffect } from "react";
import Kisa from "../../components/Kisa";
import data from "../../db.json";

export type TKisa = {
  id: number;
  imageUrl: string;
  name: string;
  age: string;
  gender: string;
  breed: string;
  character: string;
  food: string;
  owner: string;
};

const Catalog = () => {
  const [kisas, setKisas] = useState<TKisa[]>([]);

  useEffect(() => {
    // fake request
    setTimeout(() => {
      setKisas(data.kisas);
    }, 500);
  }, []);

  return (
    <div className="catalog">
      {kisas.map((kisa) => (
        <Kisa key={kisa.id} kisa={kisa} />
      ))}
    </div>
  );
};

export default Catalog;
